import {Injectable, UnauthorizedException} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {User} from "./user.entity";

@Injectable()
export class UserService {
    constructor(@InjectRepository(User) private userRepository: Repository<User>) {
    }
    async createUser(body){
        const is_user = this.userRepository.findOneBy({mb_id : body.mb_id});

        let user = {
            mb_id : body.mb_id,
            mb_pw : body.mb_pw,
            mb_name: body.mb_name,
            mb_email: body.mb_email,
        }
        user = await this.userRepository.save(user)
        return user;
    }
}
