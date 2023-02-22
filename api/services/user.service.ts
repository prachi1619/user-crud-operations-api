import {DocumentDefinition, UpdateQuery} from "mongoose";
import userModel,{UserDocument} from "../models/user.model";


//create
export function createUserService(input:DocumentDefinition<UserDocument>){
    return userModel.create(input)
}

//readAll
export function getAllUsersService(){
    return userModel.find();
}

//readById
export function getUserByIdService(id:string){
    return userModel.findById(id);
}

//update
export function updateUserService(id:string,update:UpdateQuery<UserDocument>){
    return userModel.findByIdAndUpdate(id,update)
}

//delete
export function deleteUserService(id:string){    
    return userModel.findByIdAndDelete(id)
}