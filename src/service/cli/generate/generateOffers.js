'use strict';

const {getRandomIntInclusive, readFileByName} = require(`../../../utils`);

const Types = [`offer`, `sale`];
const MAX_DESC_NUM = 5;
const Price = {min: 1000, max: 100000};


function getType(maxNum, type) {
  const descNum = getRandomIntInclusive(1, maxNum);
  const descObj = new Set();
  Array(descNum).fill().forEach(() => {
    const key = getRandomIntInclusive(0, type.length - 1);
    descObj.add(type[key]);
  });

  return Array.from(descObj);
}

async function generateOffers(count) {
  const titles = await readFileByName(`titles.txt`);
  const descriptions = await readFileByName(`sentences.txt`);
  const categories = await readFileByName(`categories.txt`);

  return Array(count).fill().map(() => {
    const picIndex = getRandomIntInclusive(1, 16);
    return ({
      "type": Types[getRandomIntInclusive(0, Types.length - 1)],
      "title": titles[getRandomIntInclusive(0, titles.length - 1)],
      "description": getType(MAX_DESC_NUM, descriptions),
      "sum": getRandomIntInclusive(Price.min, Price.max),
      "picture": `item${String(0 + picIndex).slice(-2)}`,
      "category": getType(categories.length - 1, categories),
    });
  });
}

module.exports = {
  generateOffers,
};
