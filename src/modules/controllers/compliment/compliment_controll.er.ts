import { Request, Response } from "express";
import { ComplimentService } from "../../services/compliment/compliment_service";

export class ComplimentTagController {
    async handle(req: Request, res: Response) {
        const { tag_id, user_receiver, message } = req.body;

        const {user_id} = req;

        const service = new ComplimentService();

        const compliment = await service.execute({
            user_sender: user_id,
            user_receiver,
            tag_id,
            message,
        });

        return res.status(200).json(compliment);
    }
}
