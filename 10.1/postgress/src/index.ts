import {Client} from 'pg'

const client = new Client({
    connectionString: "postgresql://sagarydv1298:Rjzv6ibCnXg3@ep-sweet-fire-a5xs39kd.us-east-2.aws.neon.tech/neondb?sslmode=require"
})


// async function createUsersTable() {
//     await client.connect()
//     const result = await client.query(`
//     CREATE TABLE users (
//         id SERIAL PRIMARY KEY,
//         username VARCHAR(50) UNIQUE NOT NULL,
//         email VARCHAR(255) UNIQUE NOT NULL,
//         password VARCHAR(255) NOT NULL,
//         created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
//     );
//     `)
    
//     console.log(result);
// }
// createUsersTable();

async function insertInUsersTable() {
    await client.connect()
    const result = await client.query(`
        INSERT INTO users (username, email, password)
        VALUES ('username_here', 'user@example.com', 'user_password');
    `)

    console.log(result);

}

insertInUsersTable()

