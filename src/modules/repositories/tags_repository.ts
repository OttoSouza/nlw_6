import { EntityRepository, Repository } from "typeorm";
import { Tags } from "../entities/tags";

@EntityRepository(Tags)
export class TagsRepository extends Repository<Tags> {}
