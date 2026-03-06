import asyncHandler from '../utils/asyncHandler.js';
import ApiError from '../utils/ApiError.js';
import ApiResponse from '../utils/ApiResponse.js';
import {
  generateProductTags,
  generateProductImpact,
} from '../services/aiService.js';
import { Product } from '../models/products.model.js';
import { Order } from '../models/order.model.js';

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

export const generateImpact = asyncHandler(async (req, res) => {
  //take input from user
  const { product_name, quantity } = req.body;
  console.log('product name=', product_name);

  //validation
  if (!product_name || !quantity) {
    throw new ApiError(400, 'both fields are compulsory');
  }

  let impactresponse;
  //generate ai response
  try {
    impactresponse = JSON.parse(
      await generateProductImpact(product_name, quantity)
    );
  } catch (error) {
    throw new ApiError(500, 'something went wrong while generating impact');
  }

  //store it in database
  const impact = await Order.create({
    product_name,
    quantity,
    plastic_saved: impactresponse.plastic_saved,
    carbon_avoided: impactresponse.carbon_avoided,
    impact_statement: impactresponse.impact_statement,
  });

  //return response
  return res
    .status(200)
    .json(new ApiResponse(200, impact, 'Impact generated successfully'));
});
