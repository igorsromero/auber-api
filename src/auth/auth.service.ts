import { Injectable } from '@nestjs/common';
import { UsuariosService } from '../usuarios/usuario.service';
import bcrypt = require('bcrypt');

@Injectable()
export class AuthService {
  constructor(private usuarioServices: UsuariosService) {}

  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.usuarioServices.findByEmail(email);
    const comparacao = await bcrypt.compare(pass, user.password)
    if (user && comparacao) {
      return user;
    }
    return null;
  }
}