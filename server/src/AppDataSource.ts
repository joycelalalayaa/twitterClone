import dotenv from "dotenv";
import { DataSource } from "typeorm";
import { User } from "./entities/User";
import { Post } from "./entities/Post";

dotenv.config();

const host = process.env.HOST;
const port = parseInt(process.env.DATABASE_PORT);
const username = process.env.DATABASE_USERNAME;
const password = process.env.DATABASE_PASSWORD;
const database = process.env.DATABASE;

export const AppDataSource = new DataSource({
  type: "postgres",
  host,
  port,
  username,
  password,
  database,
  synchronize: true,
  logging: false,
  // logging: true,
  entities: [User, Post],
  subscribers: [],
  migrations: [],
  // dropSchema: true, // THIS WILL KILL ALL YOUR DATA!
});
