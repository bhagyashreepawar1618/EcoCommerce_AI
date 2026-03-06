import asyncHandler from '../utils/asyncHandler';
import ApiError from '../utils/ApiError';
import ApiResponse from '../utils/ApiResponse';
import { User } from '../models/user.model';

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
  const newlyRegisteredUser = await User.create({
    username,
    password,
  });
});
