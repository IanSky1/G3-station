const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const path = require('path');

const routes = require('./controllers');
const helpers = require('./utils/helpers');
const sequelize = require('./config/connection');
const sequelizeStore = require('connect-session-sequelize')(session.Store);
require('dotenv').config();

const hbs = exphbs.create({ helpers });

const app = express();
const PORT = process.env.PORT || 3001;


const sess = {
    secret: process.env.g3_station_db,
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new sequelizeStore({
        db: sequelize,
    }),
};

app.use(session(sess));

app.use((req, res, next) => {
    next();
});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

// sync sequelize models to the database, then turn on the server
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));

});