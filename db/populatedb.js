import { Client } from "pg";
import path, { dirname } from "node:path";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";

// Reconstruct the __dirname for ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


async function main(){
    const connectionString = process.argv[2];

    if (!connectionString){
        console.error("Please provide a database connection string as an argument.");
        process.exit(1);
    }

    // Path to schema.sql file
    const schemaPath = path.join(__dirname, "./schema.sql");

    // Read the SQL File
    const SQL = readFileSync(schemaPath, "utf8");

    console.log("Seeding database from schema.sql...");

    const client = new Client({ connectionString, ssl: {rejectUnauthorized: false} });

    try{
        await client.connect();
        await client.query(SQL);
        console.log("Database seeded successfully");
    }catch (err){
        console.log("Error seeding database: ", err);
    }finally{
        await client.end();
    }
}

main();