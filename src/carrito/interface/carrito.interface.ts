import { Types } from 'mongoose';

export interface CarritoInterface {
    productos: Array<String>;
    fecha: Date;
    _id: Types.ObjectId;
}