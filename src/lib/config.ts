import { env } from 'node:process';

import 'dotenv/config';

export const { GH_CLIENT_ID, GH_CLIENT_SECRET, DB_URL } = env;
