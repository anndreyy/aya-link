/**
 * Controller for user routes
 */

exports.getUser = async (req, res) => {

    // Valida se o usuário existe
    // return res.status(404).send({
    //     name: 'Fly',
    //     query: req.query,
    //     params: req.params,
    //     body: req.body
    // });

    // Retorna os dados do usuário
    return res.status(200).send({
        name: 'Fly',
        query: req.query,
        params: req.params,
        body: req.body
    });
}