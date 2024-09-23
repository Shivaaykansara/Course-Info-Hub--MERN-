const express = require('express')
const router = express.Router()
const adminController = require('../controllers/admin-controller')
const authMiddleware = require('../middlewares/auth-middleware')
const adminMiddleware = require('../middlewares/admin-middleware')

router.route('/users').get(authMiddleware,adminMiddleware,adminController.users)
router.route('/users/delete/:id').delete(authMiddleware,adminMiddleware,adminController.deleteUsers)
router.route('/users/update').patch(authMiddleware,adminMiddleware,adminController.editUsers)
router.route('/coursesInfo').get(authMiddleware,adminMiddleware,adminController.coursesInfo)
router.route('/courses/update').patch(authMiddleware,adminMiddleware,adminController.editCourses)
router.route('/coursesInfo/delete/:id').delete(authMiddleware,adminMiddleware,adminController.deleteCoursesInfo)
router.route('/contacts').get(authMiddleware,adminMiddleware,adminController.contacts)
router.route('/contacts/delete/:id').delete(authMiddleware,adminMiddleware,adminController.deleteContacts)

module.exports = router