'use strict';

function getRandomIntInclusive(min, max) {
  return Math.ceil(Math.random() * (max - min)) + min;
}

module.exports = {
  getRandomIntInclusive,
};
