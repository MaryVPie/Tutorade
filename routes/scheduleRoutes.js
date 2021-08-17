var db = require('../models');

module.exports = function(app) {
  //get whole schedule
  app.get('/api/schedule', function(req, res) {
    db.Schedule.findAll({
      include: [db.Student]
    }).then(function(dbSchedule) {
      JSON.stringify(dbSchedule);
      res.json(dbSchedule);
    });
  });

  //get schedule by student id
  app.get('/api/schedule/:cid', function(req, res) {
    db.Schedule.findAll({
      where: {
        ChildId: req.params.cid
      },
      include: [db.Child]
    }).then(function(dbSchedule) {
      res.json(dbSchedule);
    });
  });

  //update student
  app.post('/api/schedule/:studentid', function(req, res) {
		var theSchedule = {};
		theSchedule.StudentId = req.params.studentid;
		var days = ["monday","tuesday","wednesday","thursday","friday"];
		for (var i=0; i <days.length;i++){
			if (days[i] in req.body){
				if(req.body[days[i]] === 'on') {theSchedule[days[i]] = true;
				}
			}
			else{
				theSchedule[days[i]] = false;
			}
		}
    db.Schedule.findOrCreate({
      where: {StudentId: req.params.studentid},
      defaults: theSchedule
    }).then(function(dbSchedule) {
      res.render("addanotherchildprompt",{pid:req.body.TutorId});
    });
  });

  //add new student
  app.post('/api/student', function(req, res) {
    console.log(req.body);
    db.Child.create(req.body).then(function(dbStudent) {
      console.log(dbStudent);
      res.render('schedulechild', { studentid: dbStudent.id});
    });
  });

  app.delete('/api/Schedule/:id', function(req, res) {
    db.Schedule.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbSchedule) {
      res.json(dbSchedule);
    });
  });
};
