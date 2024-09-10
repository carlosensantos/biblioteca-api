import { Module } from '@nestjs/common';
import { LivrosController } from './livros.controller';
import { LivrosService } from './livros.service';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [LivrosController],
  providers: [LivrosService, PrismaService]
})
export class LivrosModule {}
