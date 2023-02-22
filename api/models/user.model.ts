import mongoose, {Schema,Document} from "mongoose";

export interface UserDocument extends Document{ 
    name:string;
    email:string;
    mobile:string;
    dob:Date;
    city:string;
    education:string;
}

const userSchema= new Schema<UserDocument>({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    mobile:{
        type:String,
        required:true
    },
    dob:{
        type:Date,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    education:{
        type:String,
        required:true
    }
})

const UserModel= mongoose.model<UserDocument>("Users",userSchema);
export default UserModel;