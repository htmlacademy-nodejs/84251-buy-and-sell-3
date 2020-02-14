'use strict';

const fs = require(`fs`);
const util = require(`util`);
const readFile = util.promisify(fs.readFile);
const chalk = require(`chalk`);
const FILE_NAME = __dirname + `/help.txt`;
const constants = require(`../../../constants`);

module.exports = {
  name: `--help`,
  run() {
    async function readHelp() {
      try {
        const data = await readFile(FILE_NAME, `utf8`);
        console.info(chalk.gray(data));
        process.exit(constants.ExitCode.success);
      } catch (err) {
        process.exit(constants.ExitCode.failure);
      }
    }

    readHelp();
  }
};
