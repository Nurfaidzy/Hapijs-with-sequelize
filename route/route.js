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
    path: "/form",
    handler: (res, h) => {
      return h.file("./pages/addnew.html");
    },
  },
  {
    method: "POST",
    path: "/adduser",
    handler: async (req, res) => {
      const user = req.payload.user;
      const pass = req.payload.pass;
      try {
        const balikkan = await controller.insert(user, pass);
        return balikkan;
      } catch (error) {
        return error;
      }
    },
  },
  {
    method: "GET",
    path: "/ubahForm",
    handler: (res, h) => {
      return h.file("./pages/update.html");
    },
  },
  {
    method: "POST",
    path: "/updateUsers",
    handler: async (req, res) => {
      const user = req.payload.user;
      const pass = req.payload.pass;
      try {
        const balikkan = await controller.update(user, pass);
        if (balikkan[0] === 0) {
          return "<h1>gagal<h1/>";
        } else {
          return balikkan;
        }
      } catch (error) {
        return error;
      }
    },
  },
  {
    method: "GET",
    path: "/hapus",
    handler: (res, h) => {
      return h.file("./pages/hapus.html");
    },
  },
  {
    method: "POST",
    path: "/hapusUser",
    handler: async (req, res) => {
      const user = req.payload.user;
      const pass = req.payload.pass;
      try {
        const balikkan = await controller.hapus(user, pass);
        if (balikkan === 0) {
          return "<h1>gagal<h1/>";
        } else {
          return balikkan;
        }
      } catch (error) {
        return error;
      }
    },
  },
  {
    method: "GET",
    path: "/finall",
    handler: async (res, h) => {
      try {
        const balikkan = await controller.alldata();
        return balikkan;
      } catch (error) {
        return balikkan;
      }
    },
  },
  {
    method: "GET",
    path: "/find",
    handler: (res, h) => {
      return h.file("./pages/findone.html");
    },
  },
  {
    method: "POST",
    path: "/findone",
    handler: async (req, res) => {
      const user = req.payload.user;
      try {
        const balikkan = await controller.findone(user);
        return balikkan;
      } catch (error) {
        return error;
      }
    },
  },
];

module.exports.route = route;
