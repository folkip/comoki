import 'dotenv/config';
import { env } from 'node:process';
import { createConnection } from 'mysql2';
import type { Connection } from 'mysql2';

const { DB_URL } = env;

if (!DB_URL) {
	throw new Error('Missing ENV vars');
}

class DB {
	private conn: Connection | null = null;

	constructor(private url: string) {
		this.url = url;
	}

	async getConnection() {
		this.conn ||= createConnection(this.url);
		return this.conn;
	}
}

export default new DB(DB_URL);
