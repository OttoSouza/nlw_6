import { Router } from "express";
import { users_router } from './users_routes';
import { tags_router } from './tags_routes';
import { authenticate_router } from './authenticate_routes';
import { compliment_router } from './compliment_routes';

export const router = Router();

router.use("/users", users_router)
router.use("/tags", tags_router)
router.use("/sessions", authenticate_router)
router.use("/compliment", compliment_router)