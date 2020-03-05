'use strict';

const express = require(`express`);
const routes = require(`./routes`);

const app = express();
app.use(express.json());
app.use(routes);

const constants = require(`../../../constants`);

function startServer(port) {
  try {
    app.listen(port, () => console.log(`Сервер запущен на порту: ${port}`));
  } catch (err) {
    process.exit(constants.ExitCode.failure);
  }
}

module.exports = {
  startServer,
};
