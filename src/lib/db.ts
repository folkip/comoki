import { createConnection } from 'mysql2';

import { DB_URL } from '$lib/config';

import type { Connection } from 'mysql2';

if (!DB_URL) {
	throw new Error('Missing ENV vars');
}

class DB {
	#conn: Connection | null = null;

	constructor(private url: string) {}

	async getConnection() {
		this.#conn ||= createConnection(this.url);
		return this.#conn;
	}
}

export default new DB(DB_URL);
