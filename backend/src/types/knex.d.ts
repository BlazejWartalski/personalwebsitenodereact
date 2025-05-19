import { Knex } from 'knex';

declare module 'knex/types/tables' {
  interface Tables {
    users: {
      id: number;
      username: string;
      email: string;
      password_hash: string;
      created_at: string;
      updated_at: string;
    };
  }
}