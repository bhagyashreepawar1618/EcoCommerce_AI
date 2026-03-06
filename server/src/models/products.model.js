import mongoose, { Schema } from 'mongoose';

const productSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    sub_category: {
      type: String,
      required: true,
    },
    tags: {
      type: [String],
      default: [],
      required: true,
    },
    sustainability_filters: {
      type: [String],
      required: true,
    },
  },
  { timestamps: true }
);

export const Product = mongoose.model('Product', productSchema);
