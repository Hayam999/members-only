import { Pool } from "pg";

const pool = new Pool({
  host: "localhost",
  user: "hayam",
  database: "members_only",
  password: "hayam999",
  port: 5432,
});

export default pool;
