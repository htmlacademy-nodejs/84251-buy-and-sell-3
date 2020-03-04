'use strict';

const express = require(`express`);
const routes = require(`./routes`);
const path = require(`path`);

const DEFAULT_PORT = 8080;

const app = express();
app.use(express.static(`markup`));
app.set(`views`, path.join(__dirname, `templates`));
app.set(`view engine`, `pug`);
app.use(routes);


app.listen(DEFAULT_PORT,
    () => console.log(`Сервер запущен на порту: ${DEFAULT_PORT}`));
