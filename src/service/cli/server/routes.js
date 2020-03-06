
'use strict';

const {Router} = require(`express`);
const {readMockFile} = require(`../../../utils`);
const routes = new Router();

routes.get(`/offers`, async (req, res) => {
  let data = [];
  try {
    const mock = await readMockFile();
    if (mock) {
      data = JSON.parse(await readMockFile());
    }
  } catch (e) {
    console.log(e);
  }
  res.json(data);
});

module.exports = routes;
