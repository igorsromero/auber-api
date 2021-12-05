import { Controller, Post, Body, Param, Get } from '@nestjs/common';
import bcrypt = require('bcrypt');
import { Usuario } from 'src/usuarios/schema/usuario.schema';
import { UsuariosService } from 'src/usuarios/usuario.service';
import { AuthService } from './auth.service';

@Controller('login')
export class AuthController {
    constructor(private authService: AuthService) { }

    @Post()
    async login(@Body() usuario) {
        const user = await this.authService.validateUser(usuario.email, usuario.password);
        return user._id;
    }
}