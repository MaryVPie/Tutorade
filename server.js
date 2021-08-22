const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const helpers = require('./utils/helpers');
const seedHelper = require('./seeds/seed')

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

let databaseInitialized = false;
let seedDatabase = process.env.is_seed;

// Set up Handlebars.js engine with custom helpers
const hbs = exphbs.create({ helpers });

const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));

app.use(async (req, res, next) => {
  console.log(`dbinit:${databaseInitialized};shouldSeed:${seedDatabase}`);
  if(databaseInitialized || !seedDatabase){
    databaseInitialized = true;
    next();
  }
  
   try {
      await seedHelper.seedDatabase();
      console.log("yey!");
   }
   catch{
    console.log("sad :(");
    console.log("error:", err);
   }

   databaseInitialized = true;
  next();
});
// Inform Express.js on which template engine to use
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
