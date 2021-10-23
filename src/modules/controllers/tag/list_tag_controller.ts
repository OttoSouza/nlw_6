import { Request, Response } from "express";
import { CreateTagService } from "../../services/tags/create_tag_service";
import { ListTagService } from "../../services/tags/list_tag_service";

export class ListTagController {
    async handle(req: Request, res: Response) {
        const tagServices = new ListTagService();

        const tag = await tagServices.execute();

        return res.status(200).json(tag);
    }
}
