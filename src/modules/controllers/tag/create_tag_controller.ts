import { Request, Response } from "express";
import { CreateTagService } from '../../services/tags/create_tag_service';

export class CreateTagController {
  async handle(req: Request, res: Response) {
    const { name, email, admin } = req.body;

    const tagServices = new CreateTagService();

    const tag = await tagServices.execute({ name });

    return res.status(200).json(tag);
  }
}
