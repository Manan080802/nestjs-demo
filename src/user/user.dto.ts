/* eslint-disable prettier/prettier */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { IsEnum, IsNotEmpty, IsPhoneNumber, IsString, IsStrongPassword, ValidateNested } from "class-validator";

export enum gender {
    male = "male",
    female="female",
    other="other"

}
export class UserDto{
    @IsString()
    @IsNotEmpty()
    name:string;

    @IsString()
    @IsNotEmpty()
    email:string;
    
    @IsStrongPassword()
    @IsNotEmpty()
    password:string;
    @IsPhoneNumber()
    @IsNotEmpty()
    phoneNumber:number;
    @IsEnum(gender)
    @IsNotEmpty()
    // @ValidateNested() 
    gender:gender

}