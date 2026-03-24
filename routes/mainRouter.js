import express from "express";
import signupController from "../controllers/signupController.js";
import { validateSignup } from "../controllers/helpers.js";
const mainRouter = express();

mainRouter.get("/", (req, res) => {
  res.render("index");
});

mainRouter.get("/terms", (req, res) => {
  res.render("terms");
});
mainRouter.post("/signup", validateSignup, signupController, (req, res) => {
  res.redirect("/club-house");
});

mainRouter.get("/club-house", (req, res) => {
  // TODO add middleware to get messages and add it to the locals for rendering
  const user = req.session.user;
  if (!user) {
    return res.redirect("/");
  }
  res.render("clubHouse", { user });
});


export default mainRouter;
