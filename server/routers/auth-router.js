const express = require('express')
const router = express.Router()
const authController = require('../controllers/auth-controllers')
const validate = require('../middlewares/validate-middleware')
const { signupSchema, loginSchema } = require('../validators/auth-validator')
const authMiddleware = require('../middlewares/auth-middleware')

router.route('/register').post(validate(signupSchema),authController.register)
router.route('/login').post(validate(loginSchema),authController.login)

router.route('/user').get(authMiddleware,authController.user)

module.exports = router