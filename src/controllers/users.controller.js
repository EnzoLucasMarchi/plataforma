import User from "../models/Users.js";

export const getAll = async (req, res) => {
    const usuarios = await User.find()
    res.json(usuarios)
}

export const createUser = async (req, res) => {
    const usuario = await User.create(req.body)
    res.json(usuario)
}