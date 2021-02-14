const express = require('express');
const router = express.Router();
const userController = require('../controllers/userControllers');

router.post('/signup',userController.signup);
router.post('/signin',userController.signin);
router.get("/get",userController.getAllUser);
router.patch('/:_id',userController.updateUserInfo);

module.exports=router;