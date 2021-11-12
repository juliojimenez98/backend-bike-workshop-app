const { Sequelize } = require("sequelize");

const db = new Sequelize("workshopapp", "root", "root", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = db;
