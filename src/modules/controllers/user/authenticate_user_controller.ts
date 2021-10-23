import { Request, Response } from "express";
import { AuthenticateUserService } from "../../services/user/authenticate_user_service";

export class AuthenticateUserController {
    async handle(req: Request, res: Response) {
        const { email, password } = req.body;

        const service = new AuthenticateUserService();

        const token = await service.execute({ email, password });

        return res.status(200).json(token);
    }
}
