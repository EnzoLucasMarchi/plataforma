import express from "express"
import { connectDB } from "./config/db.js"
import usuariosRoutes from "./routes/usuarios.routes.js"
import { PORT } from "./config/config.js"

const app = express()

app.use(express.json())

connectDB()

app.use("/api/users", usuariosRoutes)

app.listen(PORT, ()=> console.log("Server ON!"))