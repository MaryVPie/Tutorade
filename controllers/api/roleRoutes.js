const db = require('../models');

module.exports = function(app) {
  //get all student
  app.get('/api/student', function(req, res) {
    db.Student.findAll({
      include: [db.Teacher, db.Schedule]
    }).then(function(dbStudent) {
      JSON.stringify(dbStudent);
      res.json(dbStudent);
    });
  });

  //get Student by id
  app.get('/api/student/:id', function(req, res) {
    db.Student.findAll({
      where: {id: req.params.id},
      include: [db.Teacher, db.Schedule]
    }).then(function(dbStudent) {
      JSON.stringify(dbStudent);
      res.json(dbStudent);
    });
  });

  //Add new Student form
  app.get('/api/student/new/:pid', function(req, res) {
    res.render('newstudent', {pid: req.params.pid});
  });

  //Add new Student
  app.post('/api/student', function(req, res) {
    //console.log(req.body);
    db.Student.create(req.body).then(function (dbStudent) {
      console.log(dbStudent);
      res.render('schedulestudent', {
        studentid: dbStudent.id,
        pid: req.body.TeacherId
      });
    });
  });

  app.post('/api/student/:id', function(req, res) {
    // console.log to test the api's then we can later comment it out
    console.log(req.body);
    var daysOfWeek = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'];
    var daysToUpdate = {};
    for (var i = 0; i < daysOfWeek.length; i++) {
      if (daysOfWeek[i] in req.body && req.body[daysOfWeek[i]] === 'on')
        daysToUpdate[daysOfWeek[i]] = true;
      else daysToUpdate[daysOfWeek[i]] = false;
    }

    db.Student.update(req.body, {where: {id: req.params.id}}).then(function(
      dbStudent
    ) {
      db.Schedule.update(daysToUpdate, {where: {StudentId: req.params.id}}).then(
        function(dbSchedule) {
					res.redirect("/studentprofile/"+req.params.id);
				}
      );
    });
  });

  app.post('/api/student/del/:id', function(req, res) {
    db.Student.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbStudent) {
      res.redirect("/");
    });
  });

  app.delete('/api/child/:id', function(req, res) {
    db.Student.destroy({
      where: {
        id: req.params.id
      }
    }).then(function (dbStudent) {
      res.json(dbStudent);
    });
  });
};
