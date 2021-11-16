import { Controller, Get, Post, Body } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UsuariosService } from './usuario.service';
import { Usuario } from './interfaces/usuario.interface';

@Controller('usuarios')
export class UsuariosController {
  constructor(private usuariosService: UsuariosService) {}

  @Post()
  async create(@Body() createUsuarioDto: CreateUsuarioDto) {
    this.usuariosService.create(createUsuarioDto);
  }

  @Get()
  async findAll(): Promise<Usuario[]> {
    return this.usuariosService.findAll();
  }
}
