"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const client = new pg_1.Client({
    connectionString: "postgresql://sagarydv1298:Rjzv6ibCnXg3@ep-sweet-fire-a5xs39kd.us-east-2.aws.neon.tech/neondb?sslmode=require"
});
// Creating the sql table
function createUsersTable() {
    return __awaiter(this, void 0, void 0, function* () {
        yield client.connect();
        const result = yield client.query(`
    CREATE TABLE users (
        id SERIAL PRIMARY KEY,
        username VARCHAR(50) UNIQUE NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
    );
    `);
        console.log(result);
    });
}
// createUsersTable();
//  Inserting a row in a table ( its the wrong way )  
function insertInUsersTable() {
    return __awaiter(this, void 0, void 0, function* () {
        yield client.connect();
        const result = yield client.query(`
        INSERT INTO users (username, email, password)
        VALUES ('username_here', 'user@example.com', 'user_password');
    `);
        console.log(result);
    });
}
// insertInUsersTable()
// inserting the right way
function insertInUserTable(username, email, password) {
    return __awaiter(this, void 0, void 0, function* () {
        yield client.connect();
        const query = "INSERT INTO users (username, email, password) VALUES ($1, $2 , $3)";
        const values = [username, email, password];
        const res = yield client.query(query, values);
        console.log(res);
    });
}
// insertInUserTable('sagar', 'sagar1@gmail.com', 'sagar')
// query data in db
function getuser(username) {
    return __awaiter(this, void 0, void 0, function* () {
        yield client.connect();
        const query = "SELECT * FROM users WHERE username = $1";
        const values = [username];
        const res = yield client.query(query, values);
        console.log(res);
    });
}
// getuser('snorlxz')
//updating in user table
function updateUserEmail(email, password) {
    return __awaiter(this, void 0, void 0, function* () {
        yield client.connect();
        const updateQuery = "UPDATE users SET password=$1 WHERE email=$2";
        const values = [password, email];
        const res = yield client.query(updateQuery, values);
        console.log(res);
    });
}
updateUserEmail('sagar@gmail.com', 'rand');
