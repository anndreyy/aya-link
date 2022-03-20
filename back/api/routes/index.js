var express = require('express');
var router = express.Router();

const controllerUser = require("../controllers/user");

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    next();
});
// define the home page route
router.get('/', function (req, res) {
    res.send('Fly');
});

// Rotas para retornar os dados do usuário
router.get('/user/:username', controllerUser.getUser);

router.post('/user', controllerUser.setUser);

module.exports = router;