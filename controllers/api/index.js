const router = require('express').Router();
const tutorRoutes = require('./tutorRoutes');
const studentRoutes = require('./studentRoutes.js');
const roleRoutes = require('./roleRoutes');
const languageRoutes = require('./languageRoutes');


router.use('/students', studentRoutes);
router.use('/tutors', tutorRoutes);
router.use('/role', roleRoutes);
router.use('/language', languageRoutes);

module.exports = router;
