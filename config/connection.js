
var sequelize = require("sequelize");


var sequelize = new Sequelize("project2_db", "root", "root", {
  host: "localhost",
  port: 3307,
  dialect: "mysql",
});

module.exports = sequelize;
