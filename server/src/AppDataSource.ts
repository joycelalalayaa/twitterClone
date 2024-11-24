import dotenv from 'dotenv';
import { DataSource } from "typeorm"
import { User } from "./entities/User";

dotenv.config();

const host = process.env.HOST;
const portort = parseInt(process.env.DATABASE_PORT);
const username = process.env.DATABASE_USERNAME;
const password = process.env.DATABASE_PASSWORD;
const database = process.env.DATABASE;


export const AppDataSource = new DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: '',
    password: '',
    database: 'twitterclone',
    synchronize: true,
    logging: false,
    // logging: true,
    entities: [User],
    subscribers: [],
    migrations: []
});