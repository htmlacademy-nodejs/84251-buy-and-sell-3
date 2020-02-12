'use strict';

const fs = require(`fs`);
const chalk = require(`chalk`);
const FILE_NAME = __dirname + `/help.txt`;
const constants = require(`../../../constants`);

module.exports = {
  name: `--help`,
  run() {
    fs.readFile(FILE_NAME, `utf8`, (err, data) => {
      if (err) {
        process.exit(constants.ExitCode.failure);
      }

      console.info(data);
      process.exit(chalk.gray(constants.ExitCode.success));
    });
  }
};
