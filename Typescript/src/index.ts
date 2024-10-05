// createTable.ts

import { Client } from 'pg';

// Create a new client instance
const client = new Client({
  user: 'shakeabhi',         // your PostgreSQL username
  host: 'localhost',         // PostgreSQL server address
  database: 'testdb',        // your database name
  password: 'shakalaka',     // your password
  port: 5432,                // default PostgreSQL port
});

async function createTable(): Promise<void> {
  try {
    // Connect to the database
    await client.connect();
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
    await client.query(createTableQuery);
    console.log("Table 'users' created successfully.");

  } catch (err) {
    console.error("Error creating table:", err);
  }
}

async function insertUser(username: string, email: string, password: string): Promise<void> {
  try {
    // Connect to the database if not already connected
    if (!client.connection.stream.writable) {
      await client.connect();
    }

    // SQL query to insert a new user
    const insertUserQuery = `
      INSERT INTO users (username, email, password) 
      VALUES ($1, $2, $3)
      RETURNING *;
    `;

    // Execute the query with parameters
    const res = await client.query(insertUserQuery, [username, email, password]);
    console.log("Inserted user:", res.rows[0]);
    
  } catch (err) {
    console.error("Error inserting user:", err);
  } finally {
    // Close the database connection
    await client.end();
  }
}

// Call the functions
async function main() {
  await createTable(); // Create the table
  await insertUser('john_doe', 'john@example.com', 'securepassword123'); // Insert a user
}

// Execute the main function
main();
