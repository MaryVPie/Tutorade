const router = require('express').Router();
const studentRoutes = require('./studentRoutes');
const tutorRoutes = require('./tutorRoutes');

router.use('/students', studentsRoutes);
router.use('/tutors', tutorRoutes);

module.exports = router;
