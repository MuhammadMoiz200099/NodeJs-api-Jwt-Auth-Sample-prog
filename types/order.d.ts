import { Document, PaginateModel } from "mongoose";

export interface IOrder extends Document {
	userId: string;
	productList: Array<string>;
    price: number;
    timeStamp: Date;
}
export interface IOrderModel<T extends Document> extends PaginateModel<T> { }
