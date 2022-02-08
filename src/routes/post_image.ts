import type { RequestHandler } from '@sveltejs/kit';

export const post: RequestHandler = () => {
	return {
		status: 200,
		headers: {
			location: '/'
		}
	};
};
