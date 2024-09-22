const express = require('express')
const router = express.Router()
const adminController = require('../controllers/admin-controller')

router.route('/users').get(adminController.users)
router.route('/users/delete/:id').delete(adminController.deleteUsers)
router.route('/users/update').patch(adminController.editUsers)
router.route('/coursesInfo').get(adminController.coursesInfo)
router.route('/courses/update').patch(adminController.editCourses)
router.route('/coursesInfo/delete/:id').delete(adminController.deleteCoursesInfo)
router.route('/contacts').get(adminController.contacts)
router.route('/contacts/delete/:id').delete(adminController.deleteContacts)

module.exports = router