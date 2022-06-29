const express = require('express');
const router = express.Router();
const newestController = require('../controllers/newestController');

router.get('/', newestController.handleNewest);

module.exports = router;