import { getMessagesQuery } from "../db/queries.js";

async function messagesModel() {
  const result = await getMessagesQuery();
  return result;
}

export default messagesModel;
