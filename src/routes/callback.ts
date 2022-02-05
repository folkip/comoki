import { GH_CLIENT_ID, GH_CLIENT_SECRET } from '$lib/config';
import logger from '$lib/logger';

import type { RequestHandler } from '@sveltejs/kit';

export const get: RequestHandler = async ({ locals, url }) => {
	const code = url.searchParams.get('code');
	const accessToken = await getAccessToken(code);
	const user = await getUser(accessToken);

	locals.ghUser = user;

  logger.info(`User ${user.login} logged in`);

	return {
		status: 302,
		headers: {
			location: '/',
			'set-cookie': [`user=${user.login ?? ''}; Path=/; HttpOnly`]
		}
	};
};

async function getAccessToken(code: string) {
	const tokenURL = 'https://github.com/login/oauth/access_token';

	const response = await fetch(tokenURL, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
		body: JSON.stringify({
			client_id: GH_CLIENT_ID,
			client_secret: GH_CLIENT_SECRET,
			code
		})
	});

	const data = await response.json();

	return data['access_token'];
}

async function getUser(accessToken: string) {
	const userURL = 'https://api.github.com/user';

	const response = await fetch(userURL, {
		headers: {
			Accept: 'application/json',
			Authorization: `Bearer ${accessToken}`
		}
	});

	return response.json();
}
