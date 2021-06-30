import { Schema, model } from "mongoose";
import { IOrder, IOrderModel } from '../../types/order';

export const OrderModelName = 'Order';

const { Types } = Schema;

const OrderSchema = new Schema<IOrderModel<IOrder>>({
	userId: { type: Types.String },
    productList: { type: Types.Mixed },
    price: { type: Types.Number },
	timeStamp: { type: Types.Date },
});


export const Order = model<IOrder>(OrderModelName, OrderSchema) as IOrderModel<IOrder>;
