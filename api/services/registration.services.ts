import {Request, Response} from "express"
import authModel from "../models/authentication.model";

const userRegistration= async(req:Request,res:Response)=>{
    const{name, email, password, password_confirmation}= req.body
    const user= await authModel.findOne({email:email})
    if(user){
        res.send({
            "status":"Failed", 
            "message":"Email Already Exists"})
    }else{
        if(name && email&& password && password_confirmation){
            if(password===password_confirmation){
                try{
                    const data= new authModel({
                        name:name,
                        email:email,
                        password:password,
                })
                await data.save();
                res.send({
                    "status":"Success",
                    "message":"Registration Successfully Done!"
                })
                }catch(error){
                    res.send({
                        "status":"Failed", 
                        "message":"Unable to Register!"})
                }
            }else{
                res.send({
                    "status":"Failed", 
                    "message":"Password And Confirmation Password Doesn't Match!"})
            }
        }else{
            res.send({
                "status":"Failed",
                "message":"All Fields Are Required!"})
        }
    }
}

export default userRegistration;