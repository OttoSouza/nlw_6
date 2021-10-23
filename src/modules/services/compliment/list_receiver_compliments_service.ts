import { getCustomRepository } from "typeorm";
import { ComplimentRepository } from "../../repositories/compliments_repository";

export class ListReceiverComplimentsService {
    async execute(user_id: string) {
        const complimentsRepo = getCustomRepository(ComplimentRepository);

        const compliments = await complimentsRepo.find({
            where: {
                user_receiver: user_id,
            },
            relations: [
                "userSender", "userReceiver", "tag"
            ]
        });

        return compliments;
    }
}
