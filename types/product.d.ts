import { Document, PaginateModel } from "mongoose";

export interface IProduct extends Document {
	name: string;
	price: number;
}
export interface IProductModel<T extends Document> extends PaginateModel<T> { }
