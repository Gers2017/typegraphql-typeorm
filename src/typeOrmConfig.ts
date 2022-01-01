import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions";
import { __production__ } from "./constants";
import { Creator } from "./entities/Creator";
import { Post } from "./entities/Post";
import path from "path";

const typeOrmConfig: PostgresConnectionOptions = {
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  logging: __production__,
  synchronize: true,
  entities: [Creator, Post],
  migrations: [path.join(__dirname, "migrations")],
};

export default typeOrmConfig;
