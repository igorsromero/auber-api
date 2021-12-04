import { Module } from '@nestjs/common';
import { Usuario, UsuarioSchema } from 'src/usuarios/schema/usuario.schema';
import { UsuariosService } from 'src/usuarios/usuario.service';
import { AuthController } from './auth.controller';

@Module({
  imports: [],
  controllers: [AuthController],
  providers: [],
  exports: [],
})
export class AuthModule { }
