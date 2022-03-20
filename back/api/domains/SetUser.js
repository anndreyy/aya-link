// imports 
const mongoose = require('mongoose');
const UserModel = require('../models/user');

/**
 * Módulo para criar um usuário
 * 
 * @param {*} user 
 */
module.exports = async (user) => {

    // Valida se o usuário existe
    const userExists = await UserModel.User.findOne({
        username: user.username
    });

    if (userExists) {
        throw new Error(`Usuário já existe com o username: ${user.username}`);
    }

    // Cria o usuário
    const newUser = new UserModel.User(user);

    // Salva o usuário
    const userSaved = await newUser.save();

    // Retorna os dados do usuário
    return userSaved;

}