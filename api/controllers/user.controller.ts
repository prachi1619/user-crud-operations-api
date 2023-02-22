import { Request,RequestHandler,Response } from "express";
import * as userService from "../services/user.service";
import { UserDocument } from "../models/user.model";

//create 
export const createUserController:RequestHandler= async(req:Request,res:Response)=>{
    const data: UserDocument= req.body;
    await userService.createUserService(data)
    .then((data)=>{
      res.json(data);
    })
    .catch(err=>{
      res.status(400).send(err.message)
    });
}

//readAll
export const getAllUsersController: RequestHandler= async(req:Request, res:Response)=>{
    userService.getAllUsersService()
    .then((data)=>{
      res.json(data);
    })
    .catch(err=>{
      res.status(400).send(err.message)
    });
}

//readById
export const getUserByIdController: RequestHandler= async(req:Request, res:Response)=>{
    let id: string = req.params.id;
    userService.getUserByIdService(id)
      .then((data)=>{
        res.json(data);
      })
      .catch(err=>{
        res.status(400).send(err.message)
      });
  }

  //update
  export const  updateUserController: RequestHandler= async(req:Request, res:Response)=>{
    const data: UserDocument= req.body;
    let id: string = req.params.id;
    userService.updateUserService(id,data)
      .then((data)=>{
        res.json(data);
      })
      .catch(err=>{
        res.status(400).send(err.message)
      });
  }

  //delete
  export const deleteUserController: RequestHandler= async(req:Request, res:Response)=>{
    let id = req.params.id;
    userService.deleteUserService(id)
    .then(()=>{
      res.json("Data Deleted Successfully");
    })
    .catch(err=>{
      res.status(400).send(err.message)
    });
  }