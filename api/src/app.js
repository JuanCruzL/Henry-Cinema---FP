const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const morgan = require('morgan');

/* routes */

const moviesRoutes = require('./routes/moviesRoutes');
const foodRoutes= require('./routes/foodRoutes');
const drinkRoutes = require('./routes/drinkRoutes');
const comboRoutes = require('./routes/comboRoutes');
const genreRoutes = require('./routes/genreRoutes');
const auditoriumRoutes = require('./routes/auditoriumRoutes');
const reviewRoutes = require('./routes/reviewRoutes');
const screeningRoutes = require('./routes/screeningRoutes');
const userRoutes = require('./routes/userRoutes');
const ticketRoutes = require('./routes/ticketRoutes');
const seatRoutes = require('./routes/seatRoutes');
const nextReleases = require('./routes/nextReleaseRoutes');


require('./db.js');

const server = express();

server.name = 'API';

server.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
server.use(bodyParser.json({ limit: '50mb' }));
server.use(cookieParser());
server.use(morgan('dev'));
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://127.0.0.1:5173'); // update to match the domain you will make the request from
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

//server.use('/', routes);

// Error catching endware.
server.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});

server.use('/movies', moviesRoutes);
server.use('/nextReleases', nextReleases);
server.use('/combos', comboRoutes);
server.use('/foods',foodRoutes);
server.use('/drinks', drinkRoutes); 
server.use('/genres',genreRoutes);
server.use('/auditoriums', auditoriumRoutes);
server.use('/reviews', reviewRoutes);
server.use('/screenings', screeningRoutes);
server.use('/users', userRoutes);
server.use('/seats', seatRoutes);
server.use('/tickets', ticketRoutes);


module.exports = server;
