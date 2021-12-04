import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UsuariosService } from './usuario.service';
import { Usuario } from './interfaces/usuario.interface';
import bcrypt = require('bcrypt');
const saltRounds = 10;

@Controller('usuarios')
export class UsuariosController {
  constructor(private usuariosService: UsuariosService) { }

  @Post()
  async create(@Body() createUsuarioDto: CreateUsuarioDto) {
    const newPassword = await bcrypt.hash(
      createUsuarioDto.password,
      saltRounds,
    );
    createUsuarioDto.password = newPassword;
    this.usuariosService.create(createUsuarioDto);
  }

  @Get()
  async findAll(): Promise<Usuario[]> {
    return this.usuariosService.findAll();
  }

  @Get(':id')
  async findOne(@Param() params): Promise<Usuario> {
    return await this.usuariosService.findOne(params.id);
  }

  @Put(':id')
  async update(
    @Param() params,
    @Body() novosDadosUsuario: Usuario,
  ): Promise<Usuario> {
    return await this.usuariosService.update(params.id, novosDadosUsuario);
  }

  @Delete(':id')
  async delete(@Param() params) {
    return await this.usuariosService.delete(params.id);
  }

  //para login: bcrypt.compare(senha, usuario.senha)
}
