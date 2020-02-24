'use strict';

const {Router} = require(`express`);
const myOffers = new Router();

myOffers.get(`/category/:id`, (req, res) => res.send(`/offers/category/${req.params.id}`));
myOffers.get(`/add`, (req, res) => res.send(`/offers/add`));
myOffers.get(`/edit/:id`, (req, res) => res.send(`offers/edit/${req.params.id}`));
myOffers.get(`/:id`, (req, res) => res.send(`offers/${req.params.id}`));

module.exports = myOffers;
