const Hapi = require("@hapi/hapi");
const rute = require("./route/route");
const init = async () => {
  const server = Hapi.server({
    host: "localhost",
    port: 3200,
  });

  server.route(rute.route);

  await server.start();
  console.log(`server start on :${server.info.uri}`);
};

process.on("Reject", (err) => {
  console.log(err);
  process.exit(1);
});

init();
