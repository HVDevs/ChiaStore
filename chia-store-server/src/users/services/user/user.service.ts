import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entities/user.model';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
    constructor(@InjectRepository(User) private userRepository: Repository<User>){}

    async createUser(user: User): Promise<User>{
        await this.userRepository.insert(user)
        return user
    }

    async getUser(_mail: string) : Promise<User[]> {
        const user =  await this.userRepository.find({
            select: ['user_id', 'username', 'password'],
            where: [{ username: _mail}]
        })
        return user
        
    }

    async getUsers(): Promise<User[]>{
        const result = await this.userRepository.find()
        return result
    }
}
