import { Module } from '@nestjs/common';
import { TagController } from 'src/modules/tag/tag.controller';
import { TagService } from 'src/modules/tag/tag.service';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [TagController],
  providers: [TagService, PrismaService],
})
export class TagModule {}
