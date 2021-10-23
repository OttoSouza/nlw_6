import { EntityRepository, Repository } from "typeorm";
import { Compliment } from '../entities/compliment';

@EntityRepository(Compliment)
export class ComplimentRepository extends Repository<Compliment> {}
