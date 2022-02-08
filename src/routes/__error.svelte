<script context="module" lang="ts">
	import type { ErrorLoad } from '@sveltejs/kit';

	export const load: ErrorLoad = ({ error, status }) => {
		return {
			props: {
				error: error.message,
				status
			}
		};
	};
</script>

<script lang="ts">
	export let status: number, error: string;
</script>

<main>
	<h1>{status}</h1>
	<p>{error}</p>
</main>

<style>
	main {
		padding: 1em;
		margin: 10%;
		margin-top: 20%;
		background-color: grey;
		color: white;
	}
</style>
