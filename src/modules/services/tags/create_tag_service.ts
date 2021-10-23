import { getCustomRepository } from "typeorm";
import { TagsRepository } from "../../repositories/tags_repository";

interface TagRequest {
  name: string;
}

export class CreateTagService {
  async execute({ name }: TagRequest) {
    const tagsRepository = getCustomRepository(TagsRepository);

    if (!name) {
      throw new Error("Tag nao existe");
    }

    const tagAlreadyExists = await tagsRepository.findOne({ name });

    if (tagAlreadyExists) {
      throw new Error("Tag ja existe");
    }

    const tag = tagsRepository.create({ name });

    await tagsRepository.save(tag);

    return tag;
  }
}
