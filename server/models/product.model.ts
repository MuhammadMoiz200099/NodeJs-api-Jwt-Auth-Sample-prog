import { Schema, model } from "mongoose";
import mongoosePaginate from 'mongoose-paginate-v2';
import { IProduct, IProductModel } from '../../types/product';

export const ProductModelName = 'Product';

const { Types } = Schema;

const ProductSchema = new Schema({
	name: { type: Types.String },
	price: { type: Types.Number },
});

ProductSchema.plugin(mongoosePaginate);

export const Product = model<IProduct>(ProductModelName, ProductSchema) as IProductModel<IProduct>;
