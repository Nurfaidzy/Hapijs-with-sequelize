const model = require("./../model/user");

const users = model.user;

module.exports.insert = async function inserUser(user, pass) {
  users
    .create({ username: "Sdsdsd", password: "sdsdddsd" })
    .then(() => {
      return "Sukses";
    })
    .catch((err) => {
      return "Failed";
    });
};
