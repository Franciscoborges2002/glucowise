import { DataSource  } from "typeorm";

export const connectionDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: parseInt("3306"),//parse to int the DB_PORT or use the default of postgres
    username: "root",
    password: "glucowise",
    database: "glucowise",
    entities: ["../Entities/*.ts"],
    synchronize: true,//To sync to the db
    migrations: ["../Migrations/*.ts"],
    subscribers: [],
  })