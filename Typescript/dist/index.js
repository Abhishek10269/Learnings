"use strict";
// createTable.ts
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
// Create a new client instance
const client = new pg_1.Client({
    user: 'shakeabhi', // your PostgreSQL username
    host: 'localhost', // PostgreSQL server address
    database: 'testdb', // your database name
    password: 'shakalaka', // your password
    port: 5432, // default PostgreSQL port
});
function createTable() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // Connect to the database
            yield client.connect();
            console.log("Connected to the database.");
            // SQL query to create the users table
            const createTableQuery = `
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        username VARCHAR(50) NOT NULL,
        email VARCHAR(100) NOT NULL UNIQUE,
        password VARCHAR(100) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `;
            // Execute the query
            yield client.query(createTableQuery);
            console.log("Table 'users' created successfully.");
        }
        catch (err) {
            console.error("Error creating table:", err);
        }
    });
}
function insertUser(username, email, password) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // Connect to the database if not already connected
            if (!client.connection.stream.writable) {
                yield client.connect();
            }
            // SQL query to insert a new user
            const insertUserQuery = `
      INSERT INTO users (username, email, password) 
      VALUES ($1, $2, $3)
      RETURNING *;
    `;
            // Execute the query with parameters
            const res = yield client.query(insertUserQuery, [username, email, password]);
            console.log("Inserted user:", res.rows[0]);
        }
        catch (err) {
            console.error("Error inserting user:", err);
        }
        finally {
            // Close the database connection
            yield client.end();
        }
    });
}
// Call the functions
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        yield createTable(); // Create the table
        yield insertUser('john_doe', 'john@example.com', 'securepassword123'); // Insert a user
    });
}
// Execute the main function
main();
