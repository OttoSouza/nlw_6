import { getCustomRepository } from "typeorm";
import { ComplimentRepository } from "../../repositories/compliments_repository";
import { UserRepository } from "../../repositories/user_repository";

interface ComplimentRequest {
    user_sender: string;
    user_receiver: string;
    tag_id: string;
    message: string;
}

export class ComplimentService {
    async execute({
        user_sender,
        user_receiver,
        tag_id,
        message,
    }: ComplimentRequest) {
        const complimentRepository = getCustomRepository(ComplimentRepository);
        const userRepository = getCustomRepository(UserRepository);

        if (user_sender == user_receiver) {
            throw new Error("Incorrect User Receiver");
        }

        const userReceiverExists = await userRepository.findOne(user_receiver);
        if (!userReceiverExists) {
            throw new Error("Usuario nao existe");
        }

        const compliment = complimentRepository.create({
            tag_id,
            user_sender,
            user_receiver,
            message,
        });

        await complimentRepository.save(compliment);

        return compliment;
    }
}
