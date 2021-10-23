import { Router } from "express";
import { CreateTagController } from '../controllers/tag/create_tag_controller';
import { EnsureAdmin } from '../../middleware/ensureAdmin';
import { ensureAuthenticate } from '../../middleware/ensureAuthenticated';
import { ListTagController } from '../controllers/tag/list_tag_controller';

export const tags_router = Router();
const createTagController = new CreateTagController();
const listTagController = new ListTagController();

tags_router.post("/", ensureAuthenticate, EnsureAdmin, createTagController.handle);
tags_router.get("/", ensureAuthenticate, EnsureAdmin, listTagController.handle);
