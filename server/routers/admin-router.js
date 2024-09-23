const express = require('express')
const router = express.Router()
const adminController = require('../controllers/admin-controller')
const authMiddleware = require('../middlewares/auth-middleware')

router.route('/users').get(authMiddleware, adminController.users)
router.route('/users/delete/:id').delete(authMiddleware, adminController.deleteUsers)
router.route('/users/update').patch(authMiddleware, adminController.editUsers)
router.route('/coursesInfo').get(authMiddleware, adminController.coursesInfo)
router.route('/courses/update').patch(authMiddleware, adminController.editCourses)
router.route('/coursesInfo/delete/:id').delete(authMiddleware, adminController.deleteCoursesInfo)
router.route('/contacts').get(authMiddleware, adminController.contacts)
router.route('/contacts/delete/:id').delete(authMiddleware, adminController.deleteContacts)

module.exports = router