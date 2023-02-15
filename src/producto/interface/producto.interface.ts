import { Types } from 'mongoose';

export interface ProductoInterface {
    title: String;
    price: Number;
    stock: Number;
    thumbnail: String;
    _id: Types.ObjectId;
}