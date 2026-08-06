import { getMessagesQuery, dropMessageQuery } from "../db/queries.js";

export async function getMessages() {
  const result = await getMessagesQuery();
  return result;
}

export async function dropMessage(message, author_first_name) {
  const result = await dropMessageQuery(message, author_first_name);
  return result;
}
