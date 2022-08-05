import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { TagEntity } from '@prisma/client';

@Injectable()
export class TagService {
  constructor(private readonly prismaService: PrismaService) {}

  async findAll(): Promise<TagEntity[]> {
    return this.prismaService.tagEntity.findMany();
  }
}
