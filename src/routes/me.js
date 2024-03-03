const express = require('express');
const router = express.Router();

const meControllers = require('../app/controllers/MeController');

// cac tuyen duong khop tu tren xuong
router.get('/stored/courses', meControllers.storedCourses);

module.exports = router;
