const express = require('express');
const router = express.Router();
const schoolController = require('../controllers/schoolControllers')

router.get('/get',schoolController.getAllSchool);
router.get('/:_id/students',schoolController.getAllStudentOfSchool);
router.post('/:_id',schoolController.createSchool);

module.exports=router;