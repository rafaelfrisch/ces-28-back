import { Schema, model } from 'mongoose';

const ProductSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true
    },
    cost: {
      type: String,
      required: true
    },
    priceToConsumer: {
      type: Number,
      required: true,
    },
    stock: {
      type: Number,
      required: true,
    },
    category: {
      type: Schema.Types.ObjectId,
      ref: 'Category',
      required: true,
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  }
);

export const Product = model('Product', ProductSchema, 'Product');
