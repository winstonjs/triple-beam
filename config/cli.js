/**
 * cli.js: Config that conform to commonly used CLI logging levels.
 *
 * (C) 2010 Charlie Robbins
 * MIT LICENCE
 */

'use strict';

/**
 * Default levels for the CLI configuration.
 * @type {Object}
 */
exports.levels = {
  error: 0,
  warn: 1,
  help: 2,
  data: 3,
  info: 4,
  http: 5,
  debug: 6,
  prompt: 7,
  verbose: 8,
  input: 9,
  silly: 10
};

/**
 * Default colors for the CLI configuration.
 * @type {Object}
 */
exports.colors = {
  error: 'red',
  warn: 'yellow',
  help: 'cyan',
  data: 'grey',
  info: 'green',
  debug: 'blue',
  prompt: 'grey',
  verbose: 'cyan',
  input: 'grey',
  silly: 'magenta'
};
