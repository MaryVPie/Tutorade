var db = require('../models');

module.exports = function(app) {
 
  require('./studentApiRoutes')(app);
  require('./tutorApiRoutes')(app);
  require('./forms')(app);
  require('./scheduleRoutes')(app);
  require('./mainroutes')(app);



  // Render 404 page for any unmatched routes
  app.get('*', function(req, res) {
    res.render('404');
  });
};
