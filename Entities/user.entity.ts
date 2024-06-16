import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

interface Diabetes{
    dateTime: Date;
    level: number;
}

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ unique: true })
    username!: string;

    @Column()
    password!: string;

    @Column({ unique: true })
    email!: string;

    @Column()
    tipoDiabetes!: string;

    @Column()
    diabetes!: Diabetes;
}