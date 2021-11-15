const { DataTypes } = require("sequelize");
const db = require("../db/connection");

const Users = db.define("User", {
  // Model attributes are defined here
  nombres: {
    type: DataTypes.STRING,
  },
  apellidos: {
    type: DataTypes.STRING,
    // allowNull defaults to true
  },
  username: {
    type: DataTypes.STRING,
    // allowNull defaults to true
  },
  password: {
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

module.exports = Users;
