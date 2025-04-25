import { EmailAddress } from "@clerk/nextjs/server";
import { model, models, Schema } from "mongoose";
import { unique } from "next/dist/build/utils";

const userSchema=new Schema({
    clerkId:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    username:{
        type:String,required:true,unique:true
    }
    ,
    firstName:{
        type:String,required:true,
    },
    lastName:{
        type:String,required:true,
    
    },
    photo:{
        type:String,
        required:true
    }
})
const User=models.User||model('User', userSchema)

export default User