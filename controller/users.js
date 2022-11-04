const model = require("./../model/user");

const users = model.user;

module.exports.insert = async function inserUser(user, pass) {
  try {
    const res = await users.create({ username: user, password: pass });
    return res;
  } catch (err) {
    return err;
  }
};

module.exports.update = async function updateUser(user, pass) {
  try {
    const update = await users.update(
      {
        username: user,
        password: pass,
      },
      {
        where: { username: user },
      }
    );
    return update;
  } catch (error) {
    return `error , ${error}`;
  }
};

module.exports.hapus = async function hapusUser(user, pass) {
  try {
    const hapus = await users.destroy({
      where: { username: user },
    });
    return hapus;
  } catch (error) {
    return `error , ${error}`;
  }
};

module.exports.alldata = async function alldataUser(user, pass) {
  try {
    const alldata = await users.findAll();
    return alldata;
  } catch (error) {
    return `error , ${error}`;
  }
};

module.exports.findone = async function findoneUser(user) {
  try {
    const alldata = await users
      .findOne({ where: { username: user } })
      .then((result) => {
        return result;
      })
      .catch((err) => {
        return err;
      });
    return alldata;
  } catch (error) {
    return `error , ${error}`;
  }
};
