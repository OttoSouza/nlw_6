import { getCustomRepository } from "typeorm";
import { TagsRepository } from "../../repositories/tags_repository";
import {classToPlain} from "class-transformer"

export class ListTagService {
    async execute() {
        const tagsRepository = getCustomRepository(TagsRepository);

        const tags = await tagsRepository.find();

        return classToPlain(tags);
    }
}
