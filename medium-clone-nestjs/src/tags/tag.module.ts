import { Module } from '@nestjs/common';
import { TagController } from './tag/tag.controller';
import { TagService } from './tag/tag.service';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [TagController],
  providers: [TagService, PrismaService],
})
export class TagModule {}
