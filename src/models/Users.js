import {Schema, model} from "mongoose"

const userSchema = new Schema({
    nombres: {
        type:String,
        required: true
    },
    apellidos: {
        type:String,
        required: true
    },    
    username: {
        type:String,
        required: true
    },
    password: {
        type:String,
        required: true
    },
    imagen: {
        type:String,
        required: true
    },
    rol: {
        type:String,
        required: true
    }
})

const User = model("Usuario", userSchema)

export default User
