import { Router } from "express";
import { AuthenticateUserController } from '../controllers/user/authenticate_user_controller';

export const authenticate_router = Router();
const authenticateController = new AuthenticateUserController();

authenticate_router.post("/", authenticateController.handle);

