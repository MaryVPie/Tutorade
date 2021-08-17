module.exports = function(app) {

    app.get('/newTeacher', function(req, res) {
        res.render('newTeacher');
    });

    app.get('/newStudent/:pid', function(req, res) {
        res.render('newStudent',{teacherId:req.params.pid});
    });

    app.get('/scheduleStudent', function(req, res) {
        res.render('scheduleStudent');
    });
}
