const path = require('path');

const express = require('express');

const detailController = require('../controllers/detail');

const router = express.Router();

// /admin/add-product => GET
router.get('/add-product', detailController.getAddDetail);

// /admin/add-product => POST
router.post('/add-product', detailController.postAddDetail);

module.exports = router;
