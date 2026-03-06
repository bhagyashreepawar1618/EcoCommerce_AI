import asyncHandler from '../utils/asyncHandler';
import ApiError from '../utils/ApiError';
import ApiResponse from '../utils/ApiResponse';
import { User } from '../models/user.model';

const generateAccessAndRefreshTokens = async (userId) => {
  try {
    const user = await User.findById(userId);

    const accessToken = user.generateAccessToken();
    const refreshToken = user.generateRefreshToken();

    user.accessToken = accessToken;
    user.refreshToken = refreshToken;

    await user.save({ validateBeforeSave: true });

    return { accessToken, refreshToken };
  } catch (error) {
    throw new ApiError(
      500,
      'something went wrong while generating access and refresh Tokens'
    );
  }
};
export const registerUser = asyncHandler(async (req, res) => {
  //take input from user
  const { username, password } = req.body;

  //validation
  if (!username || !password) {
    throw new ApiError(400, 'Both feilds are required');
  }

  //check if user is already register
  const registeredUser = await User.findOne({ username });

  //if user is already registered
  if (registeredUser) {
    throw new ApiError(404, 'User is already registered');
  }

  //if not then store his data in database
  const user = await User.create({
    username,
    password,
  });

  const newlycreatedUser = await User.findById(user._id);

  if (!newlycreatedUser) {
    throw new ApiError(500, 'Something went wrong while registartion of user');
  }

  return res
    .status(200)
    .json(
      new ApiResponse(200, newlycreatedUser, 'User is registered successfully')
    );
});

export const loginUser = asyncHandler(async (req, res) => {
  //take data from user
  const { username, password } = req.body;

  //validation
  if (!username || !password) {
    throw new ApiError(400, 'Both feilds are required');
  }

  // find user in database
  //check if he is registerd or not
  const user = await User.findOne({ username });

  if (!user) {
    throw new ApiError(400, 'user is not registered');
  }

  //if found then check the password
  const isPasscorrect = await user.isPasswordCorrect(password);

  if (!isPasscorrect) {
    throw new ApiError(400, 'Invalid Password');
  }

  //if correct then generate access and refresh tokens
  const { accessToken, refreshToken } = generateAccessAndRefreshTokens(
    user._id
  );

  console.log('access tokenis =', accessToken);

  const loggedInUser = await User.findById(user._id).select(['-password']);

  return res.status(200).json(new ApiResponse(200, {}));
});
