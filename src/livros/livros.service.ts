import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { Prisma, Livro } from '@prisma/client';

@Injectable()
export class LivrosService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.LivroCreateInput): Promise<Livro> {
    return this.prisma.livro.create({ data });
  }

  async findAll(): Promise<Livro[]> {
    return this.prisma.livro.findMany();
  }

  async findOne(id: number): Promise<Livro | null> {
    return this.prisma.livro.findUnique({ where: { id } });
  }

  async update(id: number, data: Prisma.LivroUpdateInput): Promise<Livro> {
    return this.prisma.livro.update({
      where: { id },
      data,
    });
  }

  async remove(id: number): Promise<Livro> {
    return this.prisma.livro.delete({ where: { id } });
  }
}
