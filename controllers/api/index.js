const router = require('express').Router();
const userRoutes = require('./userRoutes');
const roleRoutes = require('./roleRoutes');
const languageRoutes = require('./languageRoutes');
const userlanguageRoutes = require('./userlanguageRoutes.js');
const formsRoutes = require('./formsRoutes');


router.use('/users', userRoutes);
router.use('/role', roleRoutes);
router.use('/language', languageRoutes);
router.use('/userlanguage', userlanguageRoutes);
router.use('/forms', formsRoutes )

module.exports = router;
