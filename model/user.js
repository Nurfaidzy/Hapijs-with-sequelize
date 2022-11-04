const db = require("./../dbconfig/database");
const { DataTypes } = require("sequelize");

const tableUser = db.database;

const user = tableUser.define(
  "users",
  {
    username: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

module.exports.user = user;
