import mongoose from "mongoose";
import {DB_URL} from "../config/config.js"

export async function connectDB(){
    try {
        await mongoose.connect(DB_URL)
        console.log("funciona")
    } catch (error) {
        console.log("No funciona :(", error)
    }
}
