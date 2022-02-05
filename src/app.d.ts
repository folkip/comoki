/// <reference types="@sveltejs/kit" />

declare namespace App {
	interface Locals {
		ghUser: string;
	}

	// eslint-disable-next-line @typescript-eslint/no-empty-interface
	interface Platform {}

	interface Session {
		ghUser: string;
	}

	// eslint-disable-next-line @typescript-eslint/no-empty-interface
	interface Stuff {}
}
