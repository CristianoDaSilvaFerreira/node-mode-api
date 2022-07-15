import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

export const sequelize = new Sequelize(
  process.env.DATABASE as string,
  process.env.USERNAME as string,
  process.env.PASSWORD as string,
  {
    dialect: "mariadb",
    port: parseInt(process.env.DB_PORT as string),
  }
);
