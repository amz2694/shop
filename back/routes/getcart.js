const express = require('express');
const router = express.Router();
const getcartController = require('../controllers/getcartController');
const verifyJWT = require('../middleware/verifyJWT');

router.get('/',verifyJWT,getcartController.handleGetcart);

module.exports = router;