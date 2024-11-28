/* eslint-disable prettier/prettier */
import { Body, Controller, Inject, Post } from "@nestjs/common";
import { UserDto } from "./user.dto";
import { userService } from "./user.service";

@Controller("/user")
export class UserController {
    constructor(@Inject() private userService:userService){}

    @Post("/add")
    async createUser(@Body() createUser:UserDto){
        
    const result = await this.userService.createUser(createUser)
        return result

    }
    @Post("/login")
    async login(@Body() userData:any)
    {
        const result  = await this.userService.loginUser(userData)
        return {
            "message":"User is login",
            "success":result
        }
    }

}