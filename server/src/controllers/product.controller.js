import asyncHandler from '../utils/asyncHandler.js';
import ApiError from '../utils/ApiError.js';
import ApiResponse from '../utils/ApiResponse.js';
import { generateProductTags } from '../services/aiService.js';
import { Product } from '../models/products.model.js';

export const generateTags = asyncHandler(async (req, res) => {
  //take input from user
  const { productName, description } = req.body;

  //validation
  if (!productName || !description) {
    throw new ApiError(400, 'Both feilds are compulsory');
  }

  //after validation do an api call to generate tags
  //ai will return a string
  let airesponse;
  try {
    airesponse = JSON.parse(await generateProductTags(description));
  } catch (error) {
    throw new ApiError(500, `AI response parsing Failed ,${error}`);
  }

  console.log('response from ai=', airesponse);

  //store in database
  const product = await Product.create({
    name: productName,
    description,
    category: airesponse.category,
    tags: airesponse.tags,
    sub_category: airesponse.sub_category,
    sustainability_filters: airesponse.sustainability_filters,
  });

  //return response

  return res
    .status(200)
    .json(new ApiResponse(200, product, 'Tags generated successfully'));
});
