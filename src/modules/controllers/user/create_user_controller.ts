import { Request, Response } from "express";
import { CreateUserService } from "../../services/user/create_user_services";

export class CreateUserController {
  async handle(req: Request, res: Response) {
    const { name, email, admin, password } = req.body;

    const userServices = new CreateUserService();

    const user = await userServices.execute({ name, password, email, admin });

    return res.status(200).json(user);
  }
}
