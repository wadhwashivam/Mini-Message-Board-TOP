import { pool } from "./pool.js";


async function getAllMessages(){
    const { rows } = await pool.query("SELECT * FROM messages");
    return rows;
}

async function insertMessage(username, text){
    await pool.query("INSERT INTO messages (username, text) VALUES ($1, $2)", [username, text]);
}


export { getAllMessages, insertMessage};