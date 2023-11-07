import mysql from "mysql2/promise";
import "dotenv/config";
const dbConfig = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
    multipleStatements: true,
};
const connection = await mysql.createConnection(dbConfig);
export default connection;
