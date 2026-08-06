import getAllMessages from "../models/messagesModel.js";

// TODO assure messagesController is defined correctly

async function messagesController(req, res, next) {
  try {
    const messages = await getAllMessages();
    req.session.messages = messages;
    next();
  } catch (err) {
    console.error(`Failed to get Messages for user ${req.user}`, err);
  }
}

export default messagesController;
