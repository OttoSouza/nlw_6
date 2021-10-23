import { Request, Response } from "express";
import { ListSenderComplimentsService } from "../../services/compliment/list_sender_compliments_service";

export class ListSenderComplimentsController {
    async handle(req: Request, res: Response) {
        const { user_id } = req;
        const service = new ListSenderComplimentsService();

        const compliments = await service.execute(user_id);
        return res.status(200).json(compliments);
    }
}
