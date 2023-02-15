import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ProductoDTO } from './dto/producto.dto';
import { ProductoInterface } from './interface/producto.interface';
import { ProductoService } from './producto.service';

@Controller('producto')
export class ProductoController {
    constructor(private readonly productoService: ProductoService){};

    @Get()
    async getAllProductos(): Promise<ProductoInterface[]> {
        return this.productoService.getAll()
    }

    @Get(':id')
    async getProductoById(@Param() id: string): Promise<ProductoInterface>{
        return this.productoService.getById(id)
    }

    @Post()
    async crearProducto(@Body() productoDTO: ProductoDTO): Promise<ProductoInterface>{
        return this.productoService.createProduct(productoDTO)
    }

    @Delete()
    async deleteProductoById(@Param() id: string): Promise<ProductoInterface>{
        return this.productoService.deleteById(id)
    }

}
