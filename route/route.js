const controller = require("./../controller/users");
const route = [
  {
    method: "GET",
    path: "/",
    handler: (req, res) => {
      return `<p>berhasil</p>`;
    },
  },
  {
    method: "GET",
    path: "/adduser",
    handler: async (req, res) => {
      const balikkan = await controller.insert();
      return balikkan;
    },
  },
];

module.exports.route = route;
