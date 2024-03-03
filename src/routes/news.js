const express = require('express');
const router = express.Router();

const newsControllers = require('../app/controllers/NewsController');

// cac tuyen duong khop tu tren xuong

router.get('/:slug', newsControllers.show);
router.get('/', newsControllers.index);

module.exports = router;
