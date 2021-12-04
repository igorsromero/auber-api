import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { PasseiosModule } from './passeio/passeio.module';
import { UsuariosModule } from './usuarios/usuarios.module';

@Module({
  imports: [
    // MongooseModule.forRoot('mongodb://mongo-container/auber'), // PARA RODAR NO DOCKER
    MongooseModule.forRoot('mongodb://localhost/auber'), // PARA RODAR NO localhost
    UsuariosModule,
    PasseiosModule,
    AuthModule,
  ],
})
// eslint-disable-next-line prettier/prettier
export class AppModule { }
