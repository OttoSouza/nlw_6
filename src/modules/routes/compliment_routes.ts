import { Router } from "express";
import { AuthenticateUserController } from '../controllers/user/authenticate_user_controller';
import { ComplimentTagController } from '../controllers/compliment/compliment_controll.er';
import { ensureAuthenticate } from '../../middleware/ensureAuthenticated';
import { EnsureAdmin } from '../../middleware/ensureAdmin';
import { ListSenderComplimentsController } from '../controllers/compliment/list_sender_compliments_controller';
import { ListReceiverComplimentsController } from '../controllers/compliment/list_receiver_compliments_controller';

export const compliment_router = Router();
const complimentController = new ComplimentTagController();
const senderComplimentsController = new ListSenderComplimentsController();
const receiverComplimentsController = new ListReceiverComplimentsController();

compliment_router.use(ensureAuthenticate)


compliment_router.post("/", complimentController.handle);
compliment_router.get("/users/sender", senderComplimentsController.handle);
compliment_router.get("/users/receiver", receiverComplimentsController.handle);

