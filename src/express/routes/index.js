'use strict';

const {Router} = require(`express`);
const router = new Router();

const myRoutes = require(`./my`);
const offerRoutes = require(`./offers`);

router.use(`/my`, myRoutes);
router.use(`/offers`, offerRoutes);

router.get(`/register`, (req, res) => res.send(`/register`));
router.get(`/login`, (req, res) => res.send(`/login`));
router.get(`/search`, (req, res) => res.send(`/search`));
router.get(`/`, (req, res) => res.send(`/`));

module.exports = router;
