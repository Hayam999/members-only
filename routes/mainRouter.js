import express from "express";
import {
  dropMessageController,
  getMessagesController,
} from "../controllers/messagesController.js";
import signupController from "../controllers/signupController.js";
import clubHouseController from "../controllers/clubHouseController.js";

import {
  validateSignup,
  validateUser,
  validateSecretCode,
  validateMessage,
} from "../controllers/helpers.js";
const mainRouter = express();

mainRouter.get("/", (req, res) => {
  res.render("index");
});

mainRouter.get("/terms", (req, res) => {
  res.render("terms");
});

mainRouter.post("/signup", validateSignup, signupController, (req, res) => {
  res.redirect("/join-the-club");
});

mainRouter.get("/join-the-club", (req, res) => {
  res.render("joinTheClub");
});

mainRouter.post(
  "/club-house",
  validateSecretCode,
  clubHouseController,
  (req, res) => {
    res.redirect("/club-house/messages");
  },
);

mainRouter.get("/club-house/messages", getMessagesController, (req, res) => {
  res.render("clubHouse", {
    user: req.session.user,
    membershipStatus: req.session.user.membershipStatus,
    messages: req.session.messages,
  });
});

mainRouter.post(
  "/club-house/messages",
  validateUser,
  validateMessage,
  dropMessageController,
  (req, res) => {
    res.redirect("/club-house/messages");
  },
);
export default mainRouter;
