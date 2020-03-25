'use strict';

const express = require(`express`);
const router = require(`./routes`);
const constants = require(`../../../constants`);

const app = express();
app.use(express.json());
app.use(router.routes);

function startServer(port) {
  try {
    router.preloadMockData();
    app.listen(port, () => console.log(`Сервер запущен на порту: ${port}`));
  } catch (err) {
    process.exit(constants.ExitCode.failure);
  }
}

module.exports = {
  startServer,
};
