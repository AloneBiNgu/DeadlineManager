const sqlite3 = require('better-sqlite3');
const fs = require('fs');
const path = require('path');
const registerShutdown = global.utils['shutdown'];

let db = null;

module.exports = {
	init: async (app) => {
		if (db) {
			console.info('[Database]: Found current db Instance');
			return db;
		}

		try {
			console.info('[Database]: Connecting to database ...');
			const dbPath = path.join(__dirname, '/database/database.db');
			if (!fs.existsSync(dbPath)) {
				console.info('[Database]: Generating new database file ...');
				await fs.promises.appendFile(dbPath, '', { encoding: 'utf8' });
			}

			db = new sqlite3(path.join(__dirname, '/database/database.db'), { verbose: console.log });

			// We will generate new table if they don't have it hehehehehe
			db.prepare(
				`
				CREATE TABLE IF NOT EXISTS Deadline (
					ID INTEGER PRIMARY KEY AUTOINCREMENT,
					Name TEXT NOT NULL,
					Description TEXT,
					CreatedAt TEXT NOT NULL,
					EditedAt TEXT,
					EndAt TEXT,
					Finished INTEGER DEFAULT 0,
					Priority TEXT DEFAULT 'medium',
					ReminderTime INTEGER DEFAULT 1,
					ReminderUnit TEXT DEFAULT 'days'
				);
			`
			).run();

			console.info('[Database]: Connected.');
			return db;
		} catch (error) {
			throw error;
		}
	},

	getConnection: () => {
		if (db) {
			console.info('[Database]: Found current db Instance');
			return db;
		}
	},
};
