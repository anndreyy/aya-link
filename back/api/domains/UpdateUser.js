// imports
const UserModel = require('../models/user');

/**
 * Módulo para atualizar um usuário	
 */
module.exports = async (user, username) => {

    // Get user
    const userExist = await UserModel.User.findOne({
        username: username
    });

    // Update user
    if (userExist) {
        const userUpdated = await UserModel.Update(userExist, user);

        // Retorna os dados do usuário
        return userUpdated;
    }else{
        throw new Error(`Usuário não encontrado`);
    }   

}
