// Importing Routes
import indexRouter from "./Routes/indexRouter.js";
// Required for __dirname setup in ES Modules
import { fileURLToPath } from "node:url";
import { dirname } from "node:path";
import path from "node:path";
// Importing express to run server
import express from 'express';

// Using dotenv for environment variables
import 'dotenv/config';

// For using __dirname in ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
// Starting Express Server
const app = express();

app.set("views", path.join(__dirname, "Views"));
app.set("view engine", "ejs");


// Need to include this so that the submissions done by the form.ejs is handled properly by req.body in indexRouter
app.use(express.urlencoded({ extended: true }));

app.use("/", indexRouter);

// Listening server on specified server
const port = process.env.NODE_PORT;
app.listen(port, (error) => {
    if (error){
        throw error;
    }
    console.log(`Server running at port ${port}`);
})
