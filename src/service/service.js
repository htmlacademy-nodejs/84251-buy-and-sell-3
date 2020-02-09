'use strict';

const {cli} = require(`./cli`);

const {
  DEFAULT_COMMAND,
  USER_ARGV_INDEX,
  ExitCode
} = require(`../constants`);

const userArguments = process.argv.slice(USER_ARGV_INDEX);
const [userCommand] = userArguments;

if (userArguments.length === 0) {
  cli[DEFAULT_COMMAND].run();
  return;
}

if (!cli[userCommand]) {
  process.exit(ExitCode.failure);
}

cli[userCommand].run(userArguments.slice(1));
