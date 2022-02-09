import { env } from 'node:process';

import logger from './logger';

import 'dotenv/config';

const {
	MODE,
	GH_DEVELOPMENT_CLIENT_ID,
	GH_DEVELOPMENT_CLIENT_SECRET,
	GH_PRODUCTION_CLIENT_ID,
	GH_PRODUCTION_CLIENT_SECRET
} = env;

const inDev = MODE === 'development';

logger.info(`Running in ${inDev ? 'development' : 'production'} mode`);

const GH_CLIENT_SECRET = inDev ? GH_DEVELOPMENT_CLIENT_SECRET : GH_PRODUCTION_CLIENT_SECRET;
const GH_CLIENT_ID = inDev ? GH_DEVELOPMENT_CLIENT_ID : GH_PRODUCTION_CLIENT_ID;

export const { DB_URL } = env;

export { GH_CLIENT_SECRET, GH_CLIENT_ID };
