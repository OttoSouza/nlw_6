import { getCustomRepository } from "typeorm";
import { ComplimentRepository } from "../../repositories/compliments_repository";

export class ListSenderComplimentsService {
    async execute(user_id: string) {
        const complimentsRepo = getCustomRepository(ComplimentRepository);

        const compliments = await complimentsRepo.find({
            where: {
                user_sender: user_id,
            },
            relations: [
                "userSender", "userReceiver", "tag"
            ]
        });

        return compliments;
    }
}
