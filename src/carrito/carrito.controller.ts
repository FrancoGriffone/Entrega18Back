import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CarritoService } from './carrito.service';
import { CarritoDTO } from './dto/carrito.dto';
import { CarritoInterface } from './interface/carrito.interface';

@Controller('carrito')
export class CarritoController {
    constructor(private readonly carritoService: CarritoService){};

    @Get()
    async listar(@Param() id: string):Promise<CarritoInterface>{
        return await this.carritoService.listar(id);
    }

    @Post()
    async crearCarrito(@Body() carritoDTO: CarritoDTO):Promise<CarritoInterface>{
        return await this.carritoService.crearCarrito(carritoDTO);
    }

    @Put(':id')
    async actualizar(@Body() carr: string, id: string):Promise<CarritoInterface>{
        return await this.carritoService.actualizar(carr, id);
    }

    @Delete()
    async borrar(@Param() id: string):Promise<CarritoInterface>{
        return await this.carritoService.borrar(id);
    }
}
