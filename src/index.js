// require('dotenv').config({path: './env'});
import dotenv from "dotenv";
import connectDB from "./db/index.js";


dotenv.config({
    path: './env'
})


connectDB()


























/* Approach 1 (to connect Database)
import { Express } from "express";
const app = express();
// function connectDB(){}
// connectDB() //these two funton we can use IFFe

;(async () => {             //semicollom before Iffie function good practice
    try {
        await mongoose.connect(`${process.env.
            MONGODB_URI}/${DB_NAME}`)
            app.on("error", (error) => {
                console.log("Error:", error);
                throw error;
            })

            app.listen(process.env.PORT, () => {
                console.log(`App is listening on port 
                ${process.env.PORT}`);
            })


    } catch (error) {
        console.error("Error: ", error)
        throw  err
    }

})()

*/