import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Passeio, PasseioDocument } from './schema/passeio.schema';
import { CreatePasseioDto } from './dto/create-passeio.dto';

@Injectable()
export class PasseiosService {
  constructor(
    @InjectModel(Passeio.name) private passeioModel: Model<PasseioDocument>,
  ) {}

  async create(createPasseioDto: CreatePasseioDto): Promise<Passeio> {
    const createdPasseio = new this.passeioModel(createPasseioDto);
    return createdPasseio.save();
  }

  async findAll(): Promise<Passeio[]> {
    return this.passeioModel.find().exec();
  }

  async findOne(idPasseio: Passeio): Promise<Passeio> {
    return await this.passeioModel.findById(idPasseio).exec();
  }

  async update(idPasseio: Passeio, dadosPasseio: Passeio): Promise<Passeio> {
    await this.passeioModel.findByIdAndUpdate(idPasseio, dadosPasseio).exec();
    return this.findOne(idPasseio);
  }

  async delete(idPasseio: Passeio) {
    return await this.passeioModel.findByIdAndDelete(idPasseio).exec();
  }
}
