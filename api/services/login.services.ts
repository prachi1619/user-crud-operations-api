import {Request, Response} from "express";
import authModel from "../models/authentication.model";
import jwt from "jsonwebtoken";

export const userLogin=async(req:Request,res:Response)=>{
    try{
        const{email,password}=req.body
        if(email && password){
            const user= await authModel.findOne({email:email})
            if(user!=null){
                const checkMatch= await authModel.findOne({password:password})
                if((user.email === email) && checkMatch){
                    const token= jwt.sign({userID:user._id},
                        process.env.JWT_SECRET_KEY as string,{expiresIn:'5d'})
                    res.send({
                        "status":"Success",
                        "message":"Login Successfully!",
                        "token":token
                    })
                }else{
                    res.send({
                        "status":"Failed",
                        "message":"Incorrect Information!"
                    })
                }
            }else{
                res.send({
                    "status":"Failed"
                })
            }
        }else{
            res.send({
                "status":"Failed",
                "message":"Both Fields Are Required!"
            })
        }
    }catch(error){
        console.log(error)
    }
}