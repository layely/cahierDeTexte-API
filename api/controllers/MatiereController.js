'use strict';
var mongoose = require('mongoose'),
    Matiere = mongoose.model('Matiere');

exports.listAll = function (req, res) {
    const queryConditions = {};

    Matiere.find(queryConditions, function (err, matieres) {
        if (err) {
            res.send(err);
        }
        res.json(matieres);
    });
};

exports.addOne = function (req, res) {
    var newMatiere = new Matiere(req.body);

    newMatiere.save(function (err, matiere) {
        if (err) {
            res.send(err);
        }
        res.json(matiere);
    });
};

exports.getOne = function (req, res) {
    // var query = Matiere.where({ nom: req.params.nom });
    // query.findOne(function (err, matiere) {
    const queryConditions = {
        nom: req.params.nom
    };

    Matiere.findOne(queryConditions, function (err, matiere) {
        if (err) {
            res.send(err);
        }
        res.json(matiere);
    });
};

exports.modifyOne = function (req, res) {
    const queryConditions = {
        nom: req.params.nom,
    };

    const modified = req.body;
    Matiere.update(queryConditions, modified, function (err, result) {
        if (err) {
            res.send(err);
        }
        res.json(result);
    });
};

exports.deleteOne = function (req, res) {
    const queryConditions = {
        nom: req.params.nom
    };

    Matiere.remove(queryConditions, function (err, result) {
        if (err) {
            res.end(err);
        }
        res.json(result);
    });
};