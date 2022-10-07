import { Module } from '@nestjs/common';
import { UserService } from '../services/user/user.service';
import { UserController } from '../controllers/user/user.controller';
import { User } from 'src/entities/user.model';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module'

@Module({
    imports: [
        TypeOrmModule.forFeature([User]), 
        UserModule],
    controllers: [UserController],
    providers: [UserService]
})
export class UserModule {}
