import { configure, getLogger } from 'log4js';

configure('data.log');

const logger = getLogger('logger');

export default logger;
