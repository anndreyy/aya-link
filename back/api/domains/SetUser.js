// imports 
const UserModel = require('../models/user');

/**
 * Módulo para criar um usuário
 * 
 * @param {*} user 
 */
module.exports = async (user) => {

    // Valida se o usuário existe
    // verifica se o usuário ou e-mail existe
    const userExists = await UserModel.User.findOne(
        {
            $or: [
                { username: user.username },
                { email: user.email }
            ]
        }
    );

    if (userExists) {
        throw new Error(`Usuário ou e-mail já cadastrado`);
    }

    // Cria o usuário
    const userSaved = await UserModel.Create(user);

    // Retorna os dados do usuário
    return userSaved;

}