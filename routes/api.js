var express = require('express');
var router = express.Router();
const UserController = require('../controllers/api/v1/UserController');

/* CRUD USERS */
router.get('/users',UserController.index);
router.get('/users/:id',UserController.show);
router.post('/users/:id',UserController.update);
router.post('/users/add',UserController.create);
router.post('/users/deleted/:id',UserController.deleted);
// CRUD CHECKPOINTS

// REFERENTIALS

module.exports = router;
