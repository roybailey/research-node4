'use strict'
import Logger from 'debug'

// By default, it will not produce any output.
// To enable this logger, you have run your application with a special environment variable, called DEBUG.
// DEBUG=my-namespace node app.js

const LOG = Logger('my-namespace');
const name = 'my-name';

LOG('booting %s', name);


import winston from 'winston'

winston.debug('debug something', { firstname: 'foo', lastname: 'bar', age: 40});
winston.error('error!!! something', { firstname: 'foo', lastname: 'bar', age: 40});
winston.warn('warning! something', { firstname: 'foo', lastname: 'bar', age: 40});
winston.verbose('huh something', { firstname: 'foo', lastname: 'bar', age: 40});
winston.info('information something', { firstname: 'foo', lastname: 'bar', age: 40});
