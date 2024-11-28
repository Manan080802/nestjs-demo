/* eslint-disable prettier/prettier */

import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { gender } from "src/user/user.dto";
import { Document } from "mongoose";
import {compare, hash} from'bcrypt'

@Schema({timestamps:true})
export class User{
    @Prop({type:String,required:true})
    name:string

    @Prop({type:String,required:true})
    email:string
    
    @Prop({type:String, required:true})
    password:string
    
    @Prop({type:String,required:true})
    phoneNumber:string

    @Prop({
        type:String,
        enum:Object.keys(gender)
    })
    gender: gender
    
    checkPassword:(newPassword:string)=>Promise<boolean>

}

export const userSchema = SchemaFactory.createForClass(User)
userSchema.pre('save',async function(next){
    const hashPassword= await hash(this.password,3)
    this.password = hashPassword
    
    
    next()
})

userSchema.methods.checkPassword = async function(newPassword:string){
    const hashedPassword= this.password
    console.log(newPassword);
    console.log(hashedPassword);
    
    
    const isMatched = await compare(newPassword,hashedPassword)
    
    return isMatched
   

}
export const USER_MODEL = User.name
export type userDocument = User & Document