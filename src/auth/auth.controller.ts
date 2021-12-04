import { Controller, Post, Body, Param, Get } from '@nestjs/common';
import bcrypt = require('bcrypt');
import { Usuario } from 'src/usuarios/schema/usuario.schema';
import { UsuariosService } from 'src/usuarios/usuario.service';
import { AuthService } from './auth.service';

@Controller('login')
export class AuthController {
    constructor(private authService: AuthService) { }

    // @Get('email/:email')
    // async findByEmail(@Param() params): Promise<Usuario> {
    //     return await this.usuariosService.findByEmail(params.email);
    // }
    // const comparacao = await bcrypt.compare(usuario.password, usuarioByEmail.password)
    @Post()
    async login(@Body() usuario) {
        const user = await this.authService.validateUser(usuario.email, usuario.password);
        return user._id;
    }
}