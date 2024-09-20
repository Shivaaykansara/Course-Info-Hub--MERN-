const express = require('express')
const router = express.Router()
const {courses,course} = require('../controllers/course-controllers')

router.route('/courses').get(courses)
router.route('/courses/insert').post(course)

module.exports = router