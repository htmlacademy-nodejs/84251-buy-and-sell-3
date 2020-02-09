'use strict';

const fs = require(`fs`);
const FILE_NAME = __dirname + `/help.txt`;

module.exports = {
  name: `--help`,
  run() {
    const data = fs.readFileSync(FILE_NAME, `utf8`);
    console.info(data);
  }
};
