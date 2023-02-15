import { Injectable } from "@nestjs/common";
import mongoose from "mongoose";
import { CarritoModel } from "src/carrito/models/carrito.model";
import { ProductoMongo } from "./productoMongo.service";

@Injectable()
export class CarritoMongo {
    private producto: Object;
    private carritos: Array<string>;
    private mongodb;
    private url: string;
    constructor(){
        this.producto = new ProductoMongo();
        this.carritos = [];
        this.url = process.env.MONGOOSE_CONNECT
        this.mongodb = mongoose.connect 
    }

    //CREAR CARRITO
    async crearCarrito(){
        try {
            await this.mongodb(this.url)
            const carr = new CarritoModel()
            return await carr.save()
        } catch(e){
            console.log(e)
        }
    }

    //GUARDAR PRODUCTO EN CARRITO
    async guardarProductoEnCarrito(idCarrito: string, idProd: string){
        try {
            await this.mongodb(this.url)
            const producto = await this.producto.getById(idProd);
            return await CarritoModel.findByIdAndUpdate({_id: idCarrito}, {$push:{productos:producto}});
        } catch(e){
            console.log(e)
        }
    }

    //MOSTRAR UN CARRITO
    async listar(id: string){
        try {
            await this.mongodb(this.url)
            return await CarritoModel.findById(id)
        } catch(e){
            console.log(e)
        }
    }

    //MOSTRAR TODOS LOS CARRITOS
    async listarAll(){
        try {
            await this.mongodb(this.url)
            return await CarritoModel.find()
        } catch(e){
            console.log(e)
        }
    }


    //ACTUALIZAR UN CARRITO
    async actualizar(carr: string, id: string){
        try {
            await this.mongodb(this.url)
            const producto = await this.producto.getById(id);
            return await CarritoModel.findByIdAndUpdate({_id: carr}, {$unset:{productos:producto}});

        } catch(e){
            console.log(e)
        }
    }

    //BORRAR UN CARRITO
    async borrar(id: string){
        try {
            await this.mongodb(this.url)
            return await CarritoModel.findByIdAndDelete(id)
        } catch(e){
            console.log(e)
        }
    }
}