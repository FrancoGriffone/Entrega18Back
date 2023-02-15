import { Module } from '@nestjs/common';
import { CarritoService } from './carrito.service';
import { CarritoController } from './carrito.controller';
import { CarritoMongo } from 'src/utils/carritoMongo.service';

@Module({
  providers: [CarritoService, CarritoMongo],
  controllers: [CarritoController]
})
export class CarritoModule {}
