import { Document, PaginateModel } from "mongoose";

export interface IUser extends Document {
	firstName: string;
	lastName: string;
	email: string;
	password?: string;
	provider?: string;
	salt?: string;
}
export interface IUserModel<T extends Document> extends PaginateModel<T> { }
