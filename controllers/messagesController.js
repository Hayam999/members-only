import { dropMessage, getMessages } from "../models/messagesModel.js";

export async function dropMessageController(req, res, next) {
  const message = req.body.messageBody;
  const author_first_name = req.session.user.first_name;

  try {
    await dropMessage({ message, author_first_name });
    next();
  } catch (err) {
    console.error(`Failed to get Messages for user ${req.user}`, err);
  }
}

export async function getMessagesController(req, res, next) {
  try {
    const messages = await getMessages();
    req.session.messages = messages;
    next();
  } catch (err) {
    console.error(
      `Failed to get Messages for user ${req.user.first_name}`,
      err,
    );
  }
}
