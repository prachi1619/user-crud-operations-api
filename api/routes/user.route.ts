import {Router} from "express";
import bodyParser from "body-parser";
import { createUserController,deleteUserController,getAllUsersController,getUserByIdController, updateUserController } from "../controllers/user.controller";
import { auth } from "../middleware/validateToken";


const userRouter= Router();
userRouter.use(bodyParser.json())

userRouter.post("/user",auth,createUserController)
userRouter.get("/user/:id",auth,getUserByIdController)
userRouter.get("/user",auth,getAllUsersController)
userRouter.delete("/user/:id",auth,deleteUserController)
userRouter.put("/user/:id",auth,updateUserController)

export default userRouter;