// creamos una version reducida del users.entity

import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    user_id: number;
    @Column()
    password: string;
    @Column()
    username: string;
}
