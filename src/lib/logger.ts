import pino from 'pino';
import fs from 'node:fs';

const time = new Date();

if (!fs.existsSync('logs')) {
	fs.mkdirSync('logs');
}

// Example file -> logs/09-02-2022-15-59-49.log
const filename = `logs/${time.getUTCDay()}-${time.getUTCMonth()}-${time.getUTCFullYear()}-${time.getUTCHours()}-${time.getUTCMinutes()}-${time.getUTCSeconds()}.log`;

if (!fs.existsSync(filename)) {
	fs.writeFileSync(filename, '');
}

export default pino(pino.destination(filename));
