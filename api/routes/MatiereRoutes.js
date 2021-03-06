'use strict';
module.exports = function (app) {
    var matiereController = require('./../controllers/MatiereController');

    app.route('/matieres')
        .get(matiereController.listAll)
        .post(matiereController.addOne);

    app.route('/matieres/:_id')
        .get(matiereController.getOne)
        .put(matiereController.modifyOne)
        .delete(matiereController.deleteOne);
};
