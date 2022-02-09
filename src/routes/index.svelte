<script context="module" lang="ts">
	import type { ErrorLoad } from '@sveltejs/kit';

	export const load: ErrorLoad = ({ session }) => {
		const { ghUser } = session;

		if (!ghUser) {
			return {
				status: 302,
				redirect: '/login'
			};
		}

		return {
			props: {
				user: session.ghUser
			}
		};
	};
</script>

<script lang="ts">
	export let user: string;
</script>

<h1>Hey {user}</h1>

<form action="/logout">
	<button>Logout</button>
</form>

<form action="/post_image">
	<input type="file" />
	<input type="submit" />
</form>
