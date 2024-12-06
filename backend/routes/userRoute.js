const express = require('express');
const userController = require('../controllers/userController');
const { isAuthenticatedUser } = require('../middleware/auth');
const singleUpload = require('../middleware/multer');
const router = express.Router();


router.route('/signup').post(singleUpload,userController.createUser)

router.route('/login').post(userController.loginUser)

router.route('/forgot').post(userController.forgotPassword)

router.route('/reset/:token').patch(userController.resetPassword)

router.route('/logout').get(isAuthenticatedUser,userController.logoutUser)

router.route('/me').get(isAuthenticatedUser,userController.getUserDetail)

router.route('/password/update').patch(isAuthenticatedUser,userController.updatePassword)

router.route("/me/update").patch(isAuthenticatedUser,userController.updateProfile)

module.exports = router