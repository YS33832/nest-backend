import {Entity} from "typeorm";
import {Column, PrimaryGeneratedColumn} from "typeorm";
import { formatDate } from "../common/common";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    mb_id: string;

    @Column()
    mb_pw: string;

    @Column()
    mb_name: string

    @Column()
    mb_email: string

    @Column({default: 0})
    is_admin: true

    @Column({ default : formatDate(new Date())})
    mb_datetime: string

}