// imports
const UserModel = require('../models/user');

module.exports = async (username) => {

    // Valida se o usuário existe
    const user = await UserModel.User.findOne({
        username: username
    });

    if (!user) {
        throw new Error(`Usuário não encontrado com o username: ${username}`);
    }

    // Retorna os dados do usuário
    return user;

}
    
