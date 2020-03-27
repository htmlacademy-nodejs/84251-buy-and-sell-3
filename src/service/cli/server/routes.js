
'use strict';

const nanoId = require(`nanoid`);
const {Router} = require(`express`);
const {readMockFileSync} = require(`../../../utils`);
const routes = new Router();

let data;

function preloadMockData() {
  data = readMockFileSync().reduce((acc, cur) => {
    acc[cur.id] = cur;
    return acc;
  }, {});
}

function prepareData(result) {
  return Object.keys(result).length ? result : [];
}

function checkReqParams(offer) {
  const reqParams = [`picture`, `title`, `description`, `category`, `sum`, `type`];
  return reqParams.every((param) => offer[param]);
}

function checkValidParams(offer) {
  const reqParams = new Set([`picture`, `title`, `description`, `category`, `sum`, `type`]);
  return Object.keys(offer).every((param) => reqParams.has(param));
}

routes.get(`/api/offers`, async (req, res) => {
  res.json(Object.values(data));
});

routes.get(`/api/categories`, (req, res) => {
  let result = Object.values(data).map((offer) => offer.category).flat();
  result = Array.from(new Set(result));
  res.json(result);
});

routes.get(`/api/offers/:offerId`, ({params}, res) => {
  const {offerId} = params;
  const offer = data[offerId];
  if (!offer) {
    return res.status(404).send(`Offer not found`);
  }
  return res.json(prepareData(offer));
});

routes.post(`/api/offers`, ({body}, res) => {
  if (!checkReqParams(body)) {
    return res.status(500).send(`Malformed request`);
  }
  const newOffer = {
    id: nanoId(6),
    ...body
  };
  data[newOffer.id] = newOffer;
  return res.status(201).json(newOffer);
});

routes.put(`/api/offers/:offerId`, ({params, body}, res) => {
  const {offerId} = params;
  const offer = data[offerId];
  if (!offer) {
    return res.status(404).send(`Offer not found`);
  }

  if (!checkValidParams(body)) {
    return res.status(500).send(`Malformed request`);
  }
  data[offerId] = {
    ...offer,
    ...body,
  };

  return res.status(200).json(data[offerId]);
});

routes.delete(`/api/offers/:offerId`, ({params}, res) => {
  const {offerId} = params;
  if (!data[offerId]) {
    return res.status(404).send(`Offer not found`);
  }
  delete data[offerId];
  return res.sendStatus(204);
});

routes.get(`/api/offers/:offerId/comments`, ({params}, res) => {
  const {offerId} = params;
  const offer = data[offerId];
  if (!offer) {
    return res.status(404).send(`Offer not found`);
  }
  const comments = offer.comments;
  if (!comments.length) {
    return res.status(404).send(`Comment not found`);
  }

  return res.status(200).json(comments);
});

routes.delete(`/api/offers/:offerId/comments/:commentId`, ({params}, res) => {
  const {offerId, commentId} = params;
  const offer = data[offerId];
  if (!offer) {
    return res.status(404).send(`Offer not found`);
  }
  const comments = offer.comments;
  const comment = comments.find((com) => com.id === commentId);
  if (!comments.length || !comment) {
    return res.status(404).send(`Comment not found`);
  }

  offer.comments = comments.filter((com) => com.id !== commentId);
  return res.sendStatus(204);
});


routes.put(`/api/offers/:offerId/comments`, ({params, body}, res) => {
  const {offerId} = params;
  const offer = data[offerId];
  if (!offer) {
    return res.status(404).send(`Offer not found`);
  }

  if (!body.text) {
    return res.status(500).send(`Malformed request`);
  }
  const newComment = {
    id: nanoId(6),
    ...body,
  };
  offer.comments.push(newComment);
  return res.status(200).json(newComment);
});

routes.get(`/api/search`, ({query}, res) => {
  const term = query.query;
  if (!term) {
    return res.status(500).send(`Malformed request`);
  }

  const offers = Object.values(data).filter((offer) => offer.title.indexOf(term) > -1);
  if (!offers.length) {
    return res.status(404).send(`Offer not found`);
  }

  return res.status(200).json(offers);
});

routes.get(`/offers`, async (req, res) => {
  res.json(data);
});

module.exports = {
  routes,
  preloadMockData,
};
