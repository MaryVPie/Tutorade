var db = require('../../models');

module.exports = function(app) {
  app.get('/', function(req, res) {
    db.Schedule.findAll({include: [db.Student]}).then(function(dbSchedule) {
      res.render('index', {schedules: dbSchedule});
    });
  });

  app.get('/genStudents', function(req, res) {
    res.render('testdbPostRoutes');
  });

  app.get('/studentprofile/:id', function(req, res) {
    db.Student.findOne({
			where:{id:req.params.id},
			include: [db.Schedule]
    }).then(function(dbStudent) {
      res.render("studentprofile", { student: dbStudent, days: dbStudent.Schedule});
    });
  });
};
