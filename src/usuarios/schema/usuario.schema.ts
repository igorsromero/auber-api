import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UsuarioDocument = Usuario & Document;

@Schema()
export class Usuario {
  @Prop({ required: true })
  nome: string;

  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop({ required: true })
  cep: string;

  @Prop({ required: true })
  logradouro: string;
  
  @Prop({ required: true })
  numero: number;

  @Prop({ required: true })
  bairro: string;

  @Prop({ required: true })
  localidade: string;
  
  @Prop({ required: true })
  uf: string;
}

export const UsuarioSchema = SchemaFactory.createForClass(Usuario);
