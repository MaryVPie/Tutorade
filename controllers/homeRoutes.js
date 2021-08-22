const router = require('express').Router();
const { User, Language } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
   
    // Pass serialized data and session flag into template
    res.render('homepage', { 
    
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Use withAuth middleware to prevent access to route
router.get('/profile', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Language }],
    });

    const user = userData.get({ plain: true });

    const languageData = await Language.findAll()
    const languages = languageData.map((language) => language.get({ plain: true }));

    console.log(user)
    res.render('profile', {
      ...user,
      languages,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', async (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/profile');    
    return;
  }
  const languageData = await Language.findAll()
  const languages = languageData.map((language) => language.get({ plain: true }));
  res.render('login', {languages});
});

module.exports = router;
