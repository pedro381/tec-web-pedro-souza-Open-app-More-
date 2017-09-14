var express = require('express');
var router = express.Router();
var fs = require("fs");

router.get('/:nome', function (req, res, next) {
    fs.readFile("./evolucao.json", 'utf8', function (err, data) {
        users = JSON.parse(data);

        var user = users.filter(function (o) {
            return (o.Name === req.params.nome);
        });

        var pokemon = [];
        if (user.length > 0)
            pokemon = user[0]

        res.render('index', { pokemon: pokemon });
    });
});

module.exports = router;
