'use strict';

const chalk = require(`chalk`);
const util = require(`util`);
const fs = require(`fs`);
const writeFile = util.promisify(fs.writeFile)
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
      console.info(chalk.red(`Не больше 1000 объявлений`));
      process.exit(constants.ExitCode.failure);
    }

    async function writeMock() {
      try {
        await writeFile(FILE_NAME, JSON.stringify(generateOffers(count)));
        process.exit(constants.ExitCode.success);
      } catch (err) {
        process.exit(constants.ExitCode.failure);
      }
    }

    writeMock();
  }
};
