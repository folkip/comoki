/// <reference types="@sveltejs/kit" />

declare namespace App {
	interface Locals {
		ghUser: string;
	}

	// eslint-disable-next-line @typescript-eslint/no-empty-interface
	interface Platform {}

	// eslint-disable-next-line @typescript-eslint/no-empty-interface
	interface Session {}

	// eslint-disable-next-line @typescript-eslint/no-empty-interface
	interface Stuff {}
}
