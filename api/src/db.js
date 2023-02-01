require("dotenv").config();
const { Sequelize, DataTypes } = require("sequelize");
const fs = require("fs");
const path = require("path");
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/henryCinema`,
  {
    logging: false, // set to console.log to see the raw SQL queries
    native: false, // lets Sequelize know we can use pg-native for ~30% more speed
  }
);
const basename = path.basename(__filename);

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, "/models"))
  .filter(
    (file) =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
  )
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, "/models", file)));
  });

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach((model) => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [
  entry[0][0].toUpperCase() + entry[0].slice(1),
  entry[1],
]);
sequelize.models = Object.fromEntries(capsEntries);

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring
const { User, Ticket, Seat, Screening, Review, Reservation, Combo, Auditorium, Drink, Food } = sequelize.models;

// Aca vendrian las relaciones
// Product.hasMany(Reviews);

User.hasMany(Review, { foreignKey: { type: DataTypes.INTEGER } });
Review.belongsTo(User);
User.belongsToMany(Combo, { through: "User_Combo" });
Combo.belongsToMany(User, { through: "User_Combo" });
User.belongsToMany(Food, { through: "User_Food" });
Food.belongsToMany(User, { through: "User_Food" });
User.belongsToMany(Drink, { through: "User_Drink" });
Drink.belongsToMany(User, { through: "User_Drink" });
User.hasMany(Reservation, { foreignKey: { type: DataTypes.INTEGER } });
Reservation.belongsTo(User);
Screening.hasMany(Reservation, { foreignKey: { type: DataTypes.INTEGER } });
Reservation.belongsTo(Screening);
Auditorium.hasMany(Screening, { foreignKey: { type: DataTypes.INTEGER } });
Screening.belongsTo(Auditorium);
Auditorium.hasMany(Seat, { foreignKey: { type: DataTypes.INTEGER } });
Seat.belongsTo(Auditorium);
Reservation.belongsToMany(Seat, { through: "Reservation_Seat" });
Seat.belongsToMany(Reservation, { through: "Reservation_Seat" });
Ticket.hasOne(Reservation, { foreignKey: { type: DataTypes.INTEGER } });
Reservation.belongsTo(Ticket);
User.hasMany(Ticket, { foreignKey: { type: DataTypes.INTEGER } });
Ticket.belongsTo(User);
//Movie.belongsToMany(Genres, { through: "Movie_Genres" });
//Genres.belongsToMany(Movie, { through: "Movie_Genres" });
//Movie.hasMany(Screening, { foreignKey: { type: DataTypes.UUID } });
//Screening.belongsTo(Movie);


module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize, // para importart la conexión { conn } = require('./db.js');
};
