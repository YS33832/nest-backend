import {Body, Controller, Post, Req, Res} from '@nestjs/common';
import {Response} from "express";
import {UserService} from "./user.service";

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}
    @Post('join')
    async createUser(@Body() body, @Res() res: Response){
        await this.userService.createUser(body);
        res.json(body);
    }

}
