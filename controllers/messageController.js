import * as db from "../db/queries.js";

async function getMessages(req,res){
    try{
        const messages = await db.getAllMessages();
        res.render("index", {title: "Mini Message Board", messages: messages});
    }catch(error){
        console.log("Error loading messasges: ", error);
        res.status(500).send("Error loading messages");
    }
}

function getMessageForm(req,res){
    res.render("form");
}

async function createMessage(req,res){
    const { messageUser, messageText } = req.body;

    try{
        await db.insertMessage(messageUser, messageText);
        res.redirect("/");
    }catch(error){
        console.log("Error creating message: ", error);
        res.status(500).send("Error creating message");
    }
}

export { getMessages, getMessageForm, createMessage };