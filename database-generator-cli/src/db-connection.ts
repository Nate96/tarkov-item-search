export interface DbConnection {
  query<T>(sql: string, params: any[]): Promise<T[]>;
  run(sql: string, params: any[]): Promise<void>;
  close(): Promise<void>;
}