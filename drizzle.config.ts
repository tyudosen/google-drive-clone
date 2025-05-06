import { type Config } from "drizzle-kit";

import { env } from "~/env";

export default {
  schema: "./src/server/db/schema.ts",
  dialect: "singlestore",
  dbCredentials: {
    host: env.SINGLE_STORE_HOST,
    user: env.SINGLE_STORE_USER,
    password: env.SINGLE_STORE_PASSWORD,
    port: parseInt(env.SINGLE_STORE_PORT),
    database: env.SINGLE_STORE_DATABASE_NAME,
    ssl: {},
  },
  tablesFilter: ["drive-tutorial_*"],
} satisfies Config;
