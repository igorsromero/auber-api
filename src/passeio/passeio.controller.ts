import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { CreatePasseioDto } from './dto/create-passeio.dto';
import { PasseiosService } from './passeio.service';
import { Passeio } from './interfaces/passeio.interface';

@Controller('passeios')
export class PasseiosController {
  constructor(private passeiosService: PasseiosService) {}

  @Post()
  async create(@Body() createPasseioDto: CreatePasseioDto) {
    this.passeiosService.create(createPasseioDto);
  }

  @Get()
  async findAll(): Promise<Passeio[]> {
    return this.passeiosService.findAll();
  }

  @Get(':id')
  async findOne(@Param() params): Promise<Passeio> {
    return await this.passeiosService.findOne(params.id);
  }

  @Put(':id')
  async update(
    @Param() params,
    @Body() novosDadosPasseio: Passeio,
  ): Promise<Passeio> {
    return await this.passeiosService.update(params.id, novosDadosPasseio);
  }

  @Delete(':id')
  async delete(@Param() params) {
    return await this.passeiosService.delete(params.id);
  }
}
