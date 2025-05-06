import { drizzle } from "drizzle-orm/singlestore";
import { type Pool, createPool } from "mysql2/promise";
import { env } from "~/env";
import * as schema from "./schema";

/**
 * Cache the database connection in development. This avoids creating a new connection on every HMR
 * update.
 */
const globalForDb = globalThis as unknown as {
  connection: Pool | undefined;
};

const client =
  globalForDb.connection ??
  createPool({
    host: env.SINGLE_STORE_HOST,
    user: env.SINGLE_STORE_USER,
    database: env.SINGLE_STORE_DATABASE_NAME,
    port: parseInt(env.SINGLE_STORE_PORT),
    password: env.SINGLE_STORE_PASSWORD,
    ssl: {},
    maxIdle: 0,
  });
export const db = drizzle(client, { schema });

if (env.NODE_ENV !== "production") globalForDb.connection = client;
