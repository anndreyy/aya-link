/**
 * Controller for user routes
 */


exports.getUser = async (req, res) => {

    const GetUser = require('../domains/GetUser');

    try {
        var User = await GetUser(req.params.username);

        // Retorna os dados do usuário
        return res.status(200).send({
            data: User,
        });
    } catch (error) {
        return res.status(404).send({
            data: User,
        });

    }
}


exports.setUser = async (req, res) => {
    const SetUser = require('../domains/SetUser');

    try {
        var User = await SetUser(req.body);

        // Retorna os dados do usuário
        return res.status(200).send({
            data: User,
        });
    } catch (error) {
        return res.status(400).send({
            data: error.message,
        });

    }
}