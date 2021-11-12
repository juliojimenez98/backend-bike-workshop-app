const { DataTypes } = require("sequelize");
const db = require("../db/connection");

const User = db.define("User", {
  // Model attributes are defined here
  rut: {
    type: DataTypes.STRING,
  },
  nombres: {
    type: DataTypes.STRING,
  },
  apellidos: {
    type: DataTypes.STRING,
    // allowNull defaults to true
  },
  telefono: {
    type: DataTypes.STRING,
    // allowNull defaults to true
  },
  correo: {
    type: DataTypes.STRING,
    // allowNull defaults to true
  },
  estado: {
    type: DataTypes.BOOLEAN,
  },
});

module.exports = User;
