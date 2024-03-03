const express = require('express');
const router = express.Router();

const siteControllers = require('../app/controllers/SiteController');

// cac tuyen duong khop tu tren xuong

router.get('/search', siteControllers.search);
router.get('/', siteControllers.index);

module.exports = router;
