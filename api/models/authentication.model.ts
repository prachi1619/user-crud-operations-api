import mongoose, {Schema, Document} from "mongoose";

export interface AuthDocument extends Document{
    name:string;
    email:string;
    password:string;
}

const authSchema= new Schema<AuthDocument>({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String
    },
    password:{
        type:String,
        required: true},
})

const authModel= mongoose.model<AuthDocument>("UserData",authSchema);
export default authModel;