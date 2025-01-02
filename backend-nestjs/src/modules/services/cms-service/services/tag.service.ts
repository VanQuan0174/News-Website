import { TagEntity } from '@/database/entities/tag.entity';
import { CreateTagBto } from '@/modules/business/cms/dto/tag/create-tag';
import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class TagsService {
  constructor(
    @InjectRepository(TagEntity) // Tiêm User repository
    private tagsRepository: Repository<TagEntity>,
  ) {}
  async findAll(): Promise<TagEntity[]> {
    return await this.tagsRepository.find();
  }
  async findOne(id: number): Promise<TagEntity> {
    return await this.tagsRepository.findOne({
      where: { id: id },
    });
  }

  async create(createTagBto: CreateTagBto): Promise<TagEntity> {
    const existingTag = await this.tagsRepository.findOneBy({
      name: createTagBto.name.trim(),
    });
    if (existingTag) {
      throw new BadRequestException(
        `thẻ tag '${createTagBto.name}' đã tồn tài `,
      );
    }
    const newTag = this.tagsRepository.create(createTagBto);
    return await this.tagsRepository.save(newTag);
  }

  async destroy(id: number): Promise<string> {
    const tag = await this.tagsRepository.findOne({
      where: { id: Number(id) },
    });

    if (!tag) {
      throw new NotFoundException(`Không tìm thấy thẻ tag với id: ${id}`);
    }
    await this.tagsRepository.delete(id);

    return `Xóa thành công thẻ tag : ${tag.name}`;
  }
}
