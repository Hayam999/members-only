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
  res.render("clubHouse");
});

export default mainRouter;
