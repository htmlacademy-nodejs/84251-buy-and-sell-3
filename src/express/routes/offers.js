'use strict';

const {Router} = require(`express`);
const myOffers = new Router();

myOffers.get(`/category/:id`, (req, res) => res.send(`/offers/category/:id`));
myOffers.get(`/add`, (req, res) => res.send(`/offers/add`));
myOffers.get(`/edit/:id`, (req, res) => res.send(`offers/edit/:id`));
myOffers.get(`/:id`, (req, res) => res.send(`offers/:id`));

module.exports = myOffers;
