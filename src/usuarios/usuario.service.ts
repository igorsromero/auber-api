import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Usuario, UsuarioDocument } from './schema/usuario.schema';
import { CreateUsuarioDto } from './dto/create-usuario.dto';

@Injectable()
export class UsuariosService {
  constructor(
    @InjectModel(Usuario.name) private usuarioModel: Model<UsuarioDocument>,
  ) { }

  async create(createUsuarioDto: CreateUsuarioDto): Promise<Usuario> {
    const createdUsuario = new this.usuarioModel(createUsuarioDto);
    return createdUsuario.save();
  }

  async findAll(): Promise<Usuario[]> {
    return this.usuarioModel.find().exec();
  }

  async findOne(idUsuario: Usuario): Promise<Usuario> {
    return await this.usuarioModel.findById(idUsuario).exec();
  }

  async findByEmail(emailUsuario: Usuario): Promise<Usuario> {
    return await this.usuarioModel.findOne({ email: ('' + emailUsuario) }).exec();
  }

  async update(idUsuario: Usuario, dadosUsuario: Usuario): Promise<Usuario> {
    await this.usuarioModel.findByIdAndUpdate(idUsuario, dadosUsuario).exec();
    return this.findOne(idUsuario);
  }

  async delete(idUsuario: Usuario) {
    return await this.usuarioModel.findByIdAndDelete(idUsuario).exec();
  }
}
