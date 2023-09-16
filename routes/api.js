var express = require('express');
var router = express.Router();
const UserController = require('../controllers/api/v1/UserController');

/* CRUD USERS */
router.get('/users',UserController.index);
// CRUD CHECKPOINTS

// REFERENTIALS

module.exports = router;
