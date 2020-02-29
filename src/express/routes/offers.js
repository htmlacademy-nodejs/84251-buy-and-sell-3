'use strict';

const {Router} = require(`express`);
const myOffers = new Router();

myOffers.get(`/category/:id`, (req, res) => res.render(`pages/category`));
myOffers.get(`/add`, (req, res) => res.render(`pages/new-ticket`));
myOffers.get(`/edit/:id`, (req, res) => res.render(`pages/ticket-edit`));
myOffers.get(`/:id`, (req, res) => res.render(`pages/ticket`));

module.exports = myOffers;
