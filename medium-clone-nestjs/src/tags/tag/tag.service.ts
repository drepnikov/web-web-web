import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { Tag } from '@prisma/client';

@Injectable()
export class TagService {
  constructor(private readonly prismaService: PrismaService) {}

  async findAll(): Promise<Tag[]> {
    return this.prismaService.tag.findMany();
  }
}
