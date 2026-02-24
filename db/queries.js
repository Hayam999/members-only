import pool from "./pool.js";

// theses are the 3 types of membership_staus user, pro_user, admin

export async function addUserQuery(userData) {
  const { email, password, first_name, last_name } = userData;

  const result = await pool.query(
    `INSERT INTO users (username, password, first_name, last_name, membership_status)
     VALUES ($1, $2, $3, $4, $5)
     RETURNING id, username, first_name, last_name, membership_status`,
    [email, password, first_name, last_name, "user"],
  );

  return result.rows[0];
}
