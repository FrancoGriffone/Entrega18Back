import { Injectable } from '@nestjs/common';
import { ProductoMongo } from 'src/utils/productoMongo.service';
import { ProductoDTO } from './dto/producto.dto';
import { ProductoInterface } from './interface/producto.interface';

@Injectable()
export class ProductoService {
    constructor(private readonly productoMongo: ProductoMongo){}

    async getAll():Promise<ProductoInterface[]>{
        return await this.productoMongo.getAll();
    }

    async getById(id: string):Promise<ProductoInterface>{
        return await this.productoMongo.getById(id);
    }

    async createProduct(product: ProductoDTO):Promise<ProductoInterface>{
        return await this.productoMongo.createData(product);
    }

    async deleteById(id: string):Promise<ProductoInterface>{
        return await this.productoMongo.deleteById(id);
    }
}
