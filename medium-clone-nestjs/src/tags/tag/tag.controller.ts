import { Controller, Get } from '@nestjs/common';
import { TagService } from 'src/tags/tag/tag.service';
import { Tag } from '@prisma/client';

@Controller('tags')
export class TagController {
  constructor(private readonly tagService: TagService) {}

  @Get()
  async findAll(): Promise<{ tags: Tag[] }> {
    const allTags = await this.tagService.findAll();

    return { tags: allTags };
  }
}
