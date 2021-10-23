import { Request, Response } from "express";
import { ListReceiverComplimentsService } from '../../services/compliment/list_receiver_compliments_service';

export class ListReceiverComplimentsController {
    async handle(req: Request, res: Response) {
        const { user_id } = req;
        const service = new ListReceiverComplimentsService();

        const compliments = await service.execute(user_id);
        return res.status(200).json(compliments);
    }
}
