'use strict';

const express = require(`express`);
const {myRoutes, offerRoutes} = require(`./routes`);

const DEFAULT_PORT = 8080;

const app = express();

app.use(`/my`, myRoutes);
app.use(`/offers`, offerRoutes);

app.get(`/register`, (req, res) => res.send(`/register`));
app.get(`/login`, (req, res) => res.send(`/login`));
app.get(`/search`, (req, res) => res.send(`/search`));
app.get(`/`, (req, res) => res.send(`/`));


app.listen(DEFAULT_PORT,
    () => console.log(`Сервер запущен на порту: ${DEFAULT_PORT}`));
