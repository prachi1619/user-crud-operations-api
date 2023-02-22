import mongoose,{connect} from "mongoose";

//to avoid warning 
mongoose.set('strictQuery', false); 

//mongodb connection
function connects(){
    return connect(`${process.env.MONGODBURL}`)
    .then(()=>{
        console.log("Database connected")
    }).catch((error:any)=>{
        console.log(error)
    })
}

export default connects;