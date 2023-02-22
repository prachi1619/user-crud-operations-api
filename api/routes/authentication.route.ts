import {Router} from "express";
import  userRegistration  from "../services/registration.services";
import { userLogin } from "../services/login.services";

const authRouter = Router();

authRouter.post("/userRegistration",userRegistration);
authRouter.post("/userLogin",userLogin);

export default authRouter;