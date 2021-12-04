import { Controller, Post, Body, Param, Get } from '@nestjs/common';
import bcrypt = require('bcrypt');
import { Usuario } from 'src/usuarios/schema/usuario.schema';
import { UsuariosService } from 'src/usuarios/usuario.service';

@Controller('login')
export class AuthController {
    constructor(private usuariosService: UsuariosService) { }

    @Get('email/:email')
    async findByEmail(@Param() params): Promise<Usuario> {
        return await this.usuariosService.findByEmail(params.email);
    }

    @Post()
    async login(@Body() usuario) {
        const usuarioByEmail = await this.findByEmail(usuario.email);
        const comparacao = await bcrypt.compare(usuario.password, usuarioByEmail.password)
        return comparacao;
    }
}
