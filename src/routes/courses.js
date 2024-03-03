const express = require('express');
const router = express.Router();

const courseControllers = require('../app/controllers/CourseController');

// cac tuyen duong khop tu tren xuong

router.get('/create', courseControllers.create);
router.post('/store', courseControllers.store);
router.get('/:id/edit', courseControllers.edit);
router.get('/:slug', courseControllers.show);
router.delete('/:id', courseControllers.delete);
router.put('/:id', courseControllers.update);

module.exports = router;
