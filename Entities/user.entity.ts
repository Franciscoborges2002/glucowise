import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

interface Diabetes{
    dateTime: Date;
    level: number;

    toJSON(): object;
    fromJSON(json: object): Diabetes;
}

@Entity({ database: "glucowise", name: "users" })
export class User {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ unique: true, type: "varchar", length: 255 })
    username!: string;

    @Column({ type: "varchar", length: 255 })
    password!: string;

    @Column({ unique: true, type: "varchar", length: 255 })
    email!: string;

    @Column({ type: "varchar", length: 255 })
    tipoDiabetes!: string;

    @Column("simple-array")
    diabetes!: string[];

    User(){

    }
}