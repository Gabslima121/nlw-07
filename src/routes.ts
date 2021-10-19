import { Router } from "express";

import { AuthenticateUserController } from "./controllers/AuthenticateUserContrller";
import { CreateMessageController } from "./controllers/CreateMessageController";
import { ensureAuthenticated } from "./middlewares/ensureAuth";

const router = Router();

router.post("/authenticate", new AuthenticateUserController().handle);

router.post(
  "/messages",
  ensureAuthenticated,
  new CreateMessageController().handle
);

export { router };
