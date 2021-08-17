var db = require('../models');

module.exports = function(app) {

	// Get all Teachers
  app.get('/api/Parent', function(req, res) {
    db.Teacher.findAll({
      include: [db.Student]
    }).then(function(dbTeacher) {
      JSON.stringify(dbTeacher);
      res.json(dbTeacher);
    });
  });

	//Get only (one) Teacher
  app.get('/api/Teacher/:id', function(req, res) {
    db.Teacher.findOne({
      where: {id: req.params.id},
      include: [db.Student]
    }).then(function (dbTeacher) {
      res.json(dbTeacher);
    });
  });

	//register Teacher and proceed to add students form
  app.post('/api/Teacher', function(req, res) {
    db.Teacher.create(req.body).then(function (dbTeacher) {
          // console.log to test the api's then we can later comment it out

      console.log(dbTeacher);
      res.render("newstudent", { pid: dbTeacher.id});
    });
  })

  app.delete('/api/Teacher/:id', function(req, res) {
    db.Teacher.destroy({
      where: {
        id: req.params.id
      }
    }).then(function (dbTeacher) {
      res.json(dbTeacher);
    });
  });
};
