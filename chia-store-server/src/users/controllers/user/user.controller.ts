import { Body, Controller, Get, Post } from '@nestjs/common';
import { User } from 'src/entities/user.model';
import { UserService } from 'src/users/services/user/user.service';
import * as bcrypt from 'bcrypt'


@Controller('auth')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Get()
    getHello(): string {
        return 'Hello'
    }

    @Get('users')
    async getUsers() : Promise<User[]>{
        const users: User[] = await this.userService.getUsers()
        return users
    }
    

    @Post('/signup')
    async createUser(@Body() username: User): Promise<User>{
        console.log(username);
        
        const saltOrRounds = 10;
        const hashedPassword = await bcrypt.hash(username.password, saltOrRounds);
        var _user: User = username;
        _user.user_id = Math.floor(1000 + Math.random() * 9000)
        _user.password = hashedPassword
        const result = await this.userService.createUser(_user)
        return result

    }
}
