import { Public } from '@/decorator/customize';
import { TagsService } from '@/modules/services/cms-service/services/tag.service';
import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreateTagBto } from '../dto/tag/create-tag';

@Controller('tags')
@Public()
export class TagsController {
  constructor(private readonly tagsService: TagsService) {}

  @Get()
  findAll() {
    return this.tagsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.tagsService.findOne(id);
  }

  @Post()
  async create(@Body() createTagBto: CreateTagBto) {
    return await this.tagsService.create(createTagBto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.tagsService.destroy(id);
  }
}
