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

	import { GitHubButton, GoogleButton } from '../components/Buttons';
</script>

<main>
	<div class="max-w-3xl pb-12 mx-auto text-center md:pb-20">
		<h1 class="h1">Comoki</h1>
	</div>

	{#if user}
		<form action="/logout">
			<button>Logout</button>
		</form>
	{:else}
		<form action="/login">
			<div class="buttons">
				<GoogleButton />
				<GitHubButton />
			</div>
		</form>
	{/if}
</main>

<style>
	main {
		height: 100vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		background-color: lightgray;
	}

	.buttons {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}
</style>
