const router = require('express').Router();
const { Language } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    const newLanguage = await Language.create({
      ...req.body,
      // user_id: req.session.user_id,
    });

    res.status(200).json(newLanguage);
  } catch (err) {
    res.status(400).json(err);
  }
});

// router.delete('/:id', withAuth, async (req, res) => {
//   try {
//     const languageData = await Language.destroy({
//       where: {
//         id: req.params.id,
//         user_id: req.session.user_id,
//       },
//     });

//     if (!languageData) {
//       res.status(404).json({ message: 'No language found with this id!' });
//       return;
//     }

//     res.status(200).json(languageData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

module.exports = router;
