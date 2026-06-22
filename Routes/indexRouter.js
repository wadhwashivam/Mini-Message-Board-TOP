import { Router } from "express";
const indexRouter = Router();

import * as messageController from "../controllers/messageController.js";

indexRouter.get("/", messageController.getMessages);
indexRouter.get("/new", messageController.getMessageForm);
indexRouter.post("/new", messageController.createMessage);


export default indexRouter;