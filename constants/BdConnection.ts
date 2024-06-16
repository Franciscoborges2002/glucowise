import { DataSource } from "typeorm";

export const connectionDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "glucowise",
    database: "glucowise",
    entities: ["../Entities/*.ts"],
    synchronize: true,//To sync to the db
    migrations: ["../Migrations/*.ts"],
    subscribers: [],
  })