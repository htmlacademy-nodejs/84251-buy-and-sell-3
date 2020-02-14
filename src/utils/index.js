'use strict';

const fs = require(`fs`);
const util = require(`util`);
const readFile = util.promisify(fs.readFile);
const constants = require(`../constants`);
const PATH_TO_DATA_FOLDER = `${__dirname}/../../data/`;

function getRandomIntInclusive(min, max) {
  return Math.ceil(Math.random() * (max - min)) + min;
}

async function readFileByName(fileName) {
  let data;
  try {
    data = await readFile(`${PATH_TO_DATA_FOLDER}${fileName}`, `utf8`);
  } catch (err) {
    process.exit(constants.ExitCode.failure);
  }

  return data.trim().split(`\n`);
}

module.exports = {
  getRandomIntInclusive,
  readFileByName,
};
