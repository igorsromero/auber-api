import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsuariosModule } from './usuarios/usuarios.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/auber'),
    UsuariosModule,
  ],
})
export class AppModule {}
