const express = require('express');
const router = express.Router();
const cardController = require('../controllers/cardController');

router.post('/', function (req, res) {
    cardController.insertProject(req, res);
});

router.get('/', (req, res) => {
    cardController.getProjects(req, res);
});

module.exports = router;