/* eslint-disable prettier/prettier */
import { NestMiddleware } from "@nestjs/common";
import{Request,Response,NextFunction} from 'express'

export class UserMiddleware implements NestMiddleware{
    use(req: Request, res: Response, next: NextFunction) {
       console.log(`middleware : ${JSON.stringify (req.body,null,3)}`);
       next()
       
    }
    

}