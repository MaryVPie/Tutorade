const router = require('express').Router();
const { Student, Tutor, Language, Role} = require('../models');
const withAuth = require('../utils/auth');

// add search function

router.get('/', async (req, res) => {
  try {
    // Get all Languages and JOIN with user data
    console.log("debug here");
    const languageData = await Language.findAll({
      attributes: ['title'],
      // include: [
      //   {
      //     // model: Language,
      //     // as: 'languages'
      //     attributes: ['title'],
      //   },
      // ],
    });
    console.log("debug languageData " + languageData );
    // Serialize data so the template can read it
    const languages = languageData.map((language) => language.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('role', { 
      languages,
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    console.log(err)
    res.status(500).json(err);
    // console.log('Error')
  }
});

router.get('/language/:id', async (req, res) => {
  try {
    const languageData = await Language.findByPk(req.params.id, {
      include: [
        {
          model: Language,
          attributes: ['name'],
        },
      ],
    });

    const language = languageData.get({ plain: true });

    res.render('language', {
      ...language,
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
    // replace session with role? or leave it
    const studentData = await Student.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Student }],
    });

    const student = studentData.get({ plain: true });

    res.render('profile', {
      ...student,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/profile', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const tutorData = await Tutor.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Tutor }],
    });

    const tutor = tutorData.get({ plain: true });

    res.render('profile', {
      ...tutor,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('login');
});

module.exports = router;
