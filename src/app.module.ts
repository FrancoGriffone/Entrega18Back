import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductoModule } from './producto/producto.module';
import { CarritoModule } from './carrito/carrito.module';

@Module({
  imports: [ProductoModule, ConfigModule.forRoot({}), CarritoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
