import 'dotenv/config';
import { env } from 'node:process';
import { createConnection } from 'mysql2';
import type { Connection } from 'mysql2';

const { DB_URL } = env;

if (!DB_URL) {
	throw new Error("Missing ENV vars");
}

class DB {
	private conn: Connection | undefined;

	constructor(private url: string) {}

	private async prepare() {
		this.conn ||= createConnection(this.url);
	}

	async getConnection() {
		this.prepare();
		return this.conn as Connection;
	}
}

export default new DB(DB_URL);

