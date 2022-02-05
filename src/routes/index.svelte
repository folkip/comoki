<script context="module" lang="ts">
	import type { ErrorLoad } from '@sveltejs/kit';

	export const load: ErrorLoad = ({ session }) => {
		return {
			props: {
				user: session.ghUser
			}
		};
	};
</script>

<script>
	export let user;
</script>

<main>
	<h1>Comoki</h1>

	{#if user}
		<h2>Welcome {user}</h2>
		<form action="/logout">
			<button>Logout</button>
		</form>
	{:else}
		<form action="/login">
			<button>Login using Github</button>
		</form>
	{/if}
</main>

<style>
	main {
		background-color: lightcyan;
	}
</style>
