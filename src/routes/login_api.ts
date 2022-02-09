import { GH_CLIENT_ID } from '$lib/config';
import { nanoid } from 'nanoid';

import type { RequestHandler } from '@sveltejs/kit';

export const get: RequestHandler = () => {
	const ghAuthURL = 'https://github.com/login/oauth/authorize';

	return {
		status: 302,
		headers: {
			location: `${ghAuthURL}?client_id=${GH_CLIENT_ID}&state=${nanoid()}`
		}
	};
};
