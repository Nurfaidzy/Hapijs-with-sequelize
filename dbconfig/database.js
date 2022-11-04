const Sequelize = require("sequelize");

const sequelize = new Sequelize("hapi_tutorial", "root", "", {
  host: "localhost",
  port: 3306,
  dialect: "mysql",
});

module.exports.database = sequelize;

// sequelize
//   .authenticate()
//   .then(() => {
//     console.log("Connect to db");
//   })
//   .catch((err) => {
//     console.log("err", err);
//   });
