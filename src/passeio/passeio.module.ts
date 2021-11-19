import { Module } from '@nestjs/common';
import { PasseiosController } from './passeio.controller';
import { PasseiosService } from './passeio.service';
import { Passeio, PasseioSchema } from './schema/passeio.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Passeio.name, schema: PasseioSchema }]),
  ],
  controllers: [PasseiosController],
  providers: [PasseiosService],
  exports: [PasseiosService],
})
export class PasseiosModule {}
