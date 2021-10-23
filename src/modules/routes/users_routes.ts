import { Router } from "express";
import { CreateUserController } from "../controllers/user/create_user_controller";

export const users_router = Router();
const userController = new CreateUserController();

users_router.post("/", userController.handle);
users_router.post("/", userController.handle);
