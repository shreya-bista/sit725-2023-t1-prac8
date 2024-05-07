const cardModel = require('../models/card');

exports.getProjects = (req, res) => {
    try {
        cardModel.getProjects((error, result) => {
            if (!error) {
                res.json({ statusCode: 200, data: result, message: 'Success' });
            }
        });
    } catch (err) {
        res.json({ statusCode: 400, message: err });
    }
};

exports.insertProject = (req, res) => {
    try {
        let newProject = req.body;
        cardModel.insertProject(newProject, (err, result) => {
            if (!err) {
                res.json({ statusCode: 200, data: result, message: 'Successfully added' });
            }
        });
    } catch (err) {
        res.json({ statusCode: 400, message: err });
    }
};

