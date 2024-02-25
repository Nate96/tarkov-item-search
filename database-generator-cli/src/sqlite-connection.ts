import * as sqlite3 from "sqlite3";
import { DbConnection } from "./db-connection.js";

export class SqliteConnnection implements DbConnection {
  private db: sqlite3.Database;

  constructor(databasePath: string) {
    // Open a connection to the SQLite database
    this.db = new sqlite3.Database(databasePath);
  }

  // Function to execute a SQL query and return the result
  query<T>(sql: string, params: any[] = []): Promise<T[]> {
    return new Promise((resolve, reject) => {
      this.db.all(sql, params, (err, rows) => {
        if (err) {
          reject(err);
        } else {
          resolve(rows as T[]);
        }
      });
    });
  }

  // Function to execute a SQL command that does not return data
  run(sql: string, params: any[] = []): Promise<void> {
    return new Promise((resolve, reject) => {
      this.db.run(sql, params, function (err) {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      });
    });
  }

  // Function to close the database connection
  close(): Promise<void> {
    return new Promise((resolve, reject) => {
      this.db.close((err) => {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      });
    });
  }
}
