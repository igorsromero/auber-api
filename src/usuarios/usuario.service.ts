import { Injectable } from '@nestjs/common';
import { Usuario } from './interfaces/usuario.interface';

@Injectable()
export class UsuariosService {
  private readonly usuarios: Usuario[] = [];

  create(usuario: Usuario) {
    this.usuarios.push(usuario);
  }

  findAll(): Usuario[] {
    return this.usuarios;
  }
}
