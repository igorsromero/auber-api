import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PasseioDocument = Passeio & Document;

@Schema()
export class Passeio {
  @Prop({ required: true })
  nomeCachorro: string;

  @Prop({ required: true })
  porteCachorro: string;

  @Prop({ required: true })
  tempoPasseio: number;

  @Prop({ required: true })
  donoCachorro: string;

  @Prop()
  passeador: string;

  @Prop()
  status: string;
}

export const PasseioSchema = SchemaFactory.createForClass(Passeio);
