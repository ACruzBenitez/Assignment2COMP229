let express = require('express');
let router = express.Router();

let moongose = require('mongoose');

let loginController = require("../controllers/login")

router.get('/login', loginController.login);

router.post('/edit/:id', loginController.processEditPage);

router.get('/delete/:id', loginController.performDelete);

module.exports = router;