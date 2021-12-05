import { Module } from '@nestjs/common';
import { PasseiosController } from './passeio.controller';
import { PasseiosService } from './passeio.service';
import { Passeio, PasseioSchema } from './schema/passeio.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { UsuariosModule } from 'src/usuarios/usuarios.module';

@Module({
  imports: [
    UsuariosModule,
    MongooseModule.forFeature([{ name: Passeio.name, schema: PasseioSchema }]),
  ],
  controllers: [PasseiosController],
  providers: [PasseiosService],
  exports: [PasseiosService],
})
export class PasseiosModule { }
