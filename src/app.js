import { Bebidas } from "./model/BebidasModel.js";
import express from "express";
import { Router } from "./model/RouterModel.js";
// import { ok, error, attention } from "./utils/LogsHelpers.js";
const app = express();
const port = 3000;

app.get("/", function (req, res) {
  res.send("Hello World teste de porta");
});


app.listen(port);
