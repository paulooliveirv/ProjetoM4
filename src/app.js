import express from "express";
import { Bebidas } from "./model/BebidasModel.js";
// import { ok, error, attention } from "./utils/LogsHelpers.js";

const app = express();
const port = 3000;

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.listen(port);
