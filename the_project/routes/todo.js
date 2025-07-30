const express = require('express');
const todoRouter = express.Router();

todoRouter.get("/", (req, res) => {
  res.send('<h1>Landing page</h1>');
});
module.exports = todoRouter;
