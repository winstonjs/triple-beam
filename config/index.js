/**
 * index.js: Default settings for all levels that winston knows about.
 *
 * (C) 2010 Charlie Robbins
 * MIT LICENCE
 */

'use strict';

/**
 * Export config set for the CLI.
 * @type {Object}
 */
Object.defineProperty(exports, 'cli', {
  enumerable: true,
  value: require('./cli')
});

/**
 * Export config set for npm.
 * @type {Object}
 */
Object.defineProperty(exports, 'npm', {
  enumerable: true,
  value: require('./npm')
});

/**
 * Export config set for the syslog.
 * @type {Object}
 */
Object.defineProperty(exports, 'syslog', {
  enumerable: true,
  value: require('./syslog')
});
