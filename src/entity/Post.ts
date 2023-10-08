import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Post{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title:string;

    @Column()
    content:string;

    @Column()
    @CreateDateColumn()
    createdAt : Date;
}