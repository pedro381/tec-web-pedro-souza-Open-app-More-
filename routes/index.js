var express = require('express');
var router = express.Router();
var fs = require("fs");

router.get('/:nome', function (req, res, next) {
    fs.readFile("./evolucao.json", 'utf8', function (err, data) {
        users = JSON.parse(data);

        var pokemon = [];

        for (var i = 0; i < users.length ; i++) {
            if (users[i].Name === req.params.nome) {
                pokemon = users[i];

                if (i > 0)
                    pokemon.Anterior = users[(i - 1)].Name;
                if (i < users.length)
                    pokemon.Proximo = users[(i + 1)].Name;
            }
        }


        res.render('index', { pokemon: pokemon });
    });
});

module.exports = router;
