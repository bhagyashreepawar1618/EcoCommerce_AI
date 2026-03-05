import mongoose, { Schema } from 'mongoose';

const orderSchema = new Schema(
  {
    product_name: {
      type: String,
      required: true,
    },
    quantity: {
      type: String,
      required: true,
    },
    plastic_saved: {
      type: String,
      required: true,
    },
    carbon_avoided: {
      type: String,
      required: true,
    },
    impact_statement: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const Order = mongoose.model('Order', orderSchema);
