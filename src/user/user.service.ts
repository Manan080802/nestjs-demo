/* eslint-disable prettier/prettier */
import { BadGatewayException, BadRequestException, Injectable, NotAcceptableException, NotFoundException, Scope } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { USER_MODEL, userDocument } from "src/schema/user.schema";
import { UserDto } from "./user.dto";



@Injectable({scope:Scope.DEFAULT})
export class userService {
    constructor(@InjectModel(USER_MODEL) private userModel:Model<userDocument>){
        console.log(this.userModel);
        
    }
    createUser(user:UserDto){
        try
        {

            return this.userModel.create(user)
        }
        catch(error)
        {
            console.log(error.message);
            if (error.name === "ValidationError") {
                throw new BadRequestException(error.errors);
              }
            
            throw new BadGatewayException(error)
        }
        

    }
    async loginUser(user:any){
        const userData = await this.userModel.findOne({email:user.email})
        console.log(userData);
        
        if(!userData)
        {
            throw new NotFoundException("there are no data")
        }
        const isMatched = await userData.checkPassword(user.password)
        if(!isMatched)
        {
            throw new NotAcceptableException("Username and password is not matched.")
        }
     
        return isMatched

    }

}