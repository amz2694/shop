const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const verifyJWT = require('../middleware/verifyJWT');


router.route('/')
    .get (verifyJWT,userController.handleGetuser)
    .put(verifyJWT,userController.handleChangeuser)
    .delete(verifyJWT,userController.handleDeleteuser)

module.exports = router;