import express from "express";

const mainRouter = express();

mainRouter.get("/", (req, res) => {
  res.render("index");
});

mainRouter.get("/terms", (req, res) => {
  res.render("terms");
});
mainRouter.get("/signup", (req, res) => {
  res.render("index");
});

export default mainRouter;
