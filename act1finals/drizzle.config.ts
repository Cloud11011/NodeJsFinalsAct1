import { type Config } from "drizzle-kit";

import { env } from "act1finals1/env";

export default {
  schema: "./src/server/db/schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: env.DATABASE_URL,
  },
  tablesFilter: ["act1finals_*"],
} satisfies Config;
