import { Injectable } from '@nestjs/common';
import { CarritoInterface } from './interface/carrito.interface';
import { CarritoMongo } from 'src/utils/carritoMongo.service';

@Injectable()
export class CarritoService {
    constructor(private readonly CarritoMongo : CarritoMongo){}

    async listar(id: string):Promise<CarritoInterface>{
        return await this.CarritoMongo.listar(id);
    }

    async crearCarrito():Promise<CarritoInterface>{
        return await this.CarritoMongo.crearCarrito();
    }

    async actualizar(carr: string, id: string):Promise<CarritoInterface>{
        return await this.CarritoMongo.actualizar(carr, id);
    }

    async borrar(id: string):Promise<CarritoInterface>{
        return await this.CarritoMongo.borrar(id);
    }
}

