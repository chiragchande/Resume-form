const path = require('path');

const express = require('express');

const detailController = require('../controllers/detail')

const router = express.Router();

router.get('/', detailController.getDetails);

module.exports = router;
