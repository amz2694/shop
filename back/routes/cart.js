const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cartController');
const verifyJWT = require('../middleware/verifyJWT');

router.post('/',verifyJWT,cartController.handleCart);

module.exports = router;