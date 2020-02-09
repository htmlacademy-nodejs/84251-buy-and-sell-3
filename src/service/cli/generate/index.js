'use strict';

const fs = require(`fs`);
const {generateOffers} = require(`./generateOffers`);
const FILE_NAME = __dirname + `/mock.json`;
const DEFAULT_COUNT = 1;
const MAX_COUNT = 1000;
const constants = require(`../../../constants`);

module.exports = {
  name: `--generate`,
  run([arg]) {
    let count = Number.parseInt(arg, 10) || DEFAULT_COUNT;

    if (count > MAX_COUNT) {
      console.info(`Не больше 1000 объявлений`);
      process.exit(constants.ExitCode.failure);
    }

    fs.writeFile(FILE_NAME, JSON.stringify(generateOffers(count)), (err) => {
      if (err) {
        process.exit(constants.ExitCode.failure);
      }

      process.exit(constants.ExitCode.success);
    });
  }
};
