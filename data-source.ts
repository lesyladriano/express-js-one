import "reflect-metadata";
import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
    type: "postgres",
    host:"localhost",
    port: 5432,
    username: "postgres",
    password : "[Lesyl0910]",
    database: "lesyl_adriano",
    synchronize: true,
    logging: false,
    entities: ["src/entity/**/*.ts"],
    migrations: [],
    subscribers: [],
});