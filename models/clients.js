const { DataTypes } = require("sequelize");
const db = require("../db/connection");

const Clients = db.define("Client", {
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
    defaultValue: 1,
  },
});

module.exports = Clients;
