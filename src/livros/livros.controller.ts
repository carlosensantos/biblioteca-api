import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LivrosService } from './livros.service';
import { Prisma } from '@prisma/client';

@Controller('livros')
export class LivrosController {
  constructor(private readonly livrosService: LivrosService) {}

  @Post()
  create(@Body() data: Prisma.LivroCreateInput) {
    return this.livrosService.create(data);
  }

  @Get()
  findAll() {
    return this.livrosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.livrosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() data: Prisma.LivroUpdateInput) {
    return this.livrosService.update(+id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.livrosService.remove(+id);
  }
}
