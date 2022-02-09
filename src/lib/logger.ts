import pino from 'pino';

export default pino(pino.destination('./logs.txt'));
