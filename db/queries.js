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

export async function updateMemberShipStatusQuery(membershipStatus, userId) {
  return await true;
}

export async function dropMessageQuery(message, author_first_name) {
  const result = await pool.query(
    `INSERT INTO messages (author_first_name, body)
     VALUES ($1, $2)`,
    [author_first_name, message],
  );
  return result.rows[0];
}

export async function getMessagesQuery() {
  const result = await pool.query(
    `SELECT author_first_name, body, created_at FROM messages ORDER BY created_at DESC`,
  );
  return result.rows;
}
