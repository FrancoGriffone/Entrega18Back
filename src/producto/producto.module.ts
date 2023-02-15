import { Module } from '@nestjs/common';
import { ProductoService } from './producto.service';
import { ProductoController } from './producto.controller';
import { ProductoMongo } from 'src/utils/productoMongo.service';

@Module({
  providers: [ProductoService, ProductoMongo],
  controllers: [ProductoController]
})
export class ProductoModule {}
