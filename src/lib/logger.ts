import pino from 'pino';

const time = new Date();

// Example file -> logs/09-02-2022-15-59-49.log
const filename = `logs/${time.getUTCDay()}-${time.getUTCMonth()}-${time.getUTCFullYear()}-${time.getUTCHours()}-${time.getUTCMinutes()}-${time.getUTCSeconds()}.log`;

export default pino(pino.destination(filename));
