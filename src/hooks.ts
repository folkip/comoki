import cookie from 'cookie';

import type { GetSession, Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	const cookies = cookie.parse(event.request.headers.get('cookie') ?? '');

	event.locals.ghUser = cookies.user;

	const response = await resolve(event);

	response.headers['set-cookie'] = `user=${event.locals.ghUser ?? ''}; Path=/; HttpOnly`;

	return response;
};

export const getSession: GetSession = async (request) => {
	return {
		ghUser: request.locals.ghUser
	};
};
