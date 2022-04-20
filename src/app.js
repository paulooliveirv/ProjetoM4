import express from "express";
import { ok, error, attention } from "./utils/LogsHelpers.js";
import { BebidasController } from "./controller/BebidasController.js";
const app = express();
const port = 3000;
app.listen(port, () =>
  console.log(attention(`app funcionando em http://localhost:${port}`))
);

app.get("/", function (req, res) {
  res.send("Hello World teste de porta");
});

const bebidas = new BebidasController(
  "skol",
  "puro malte",
  "lata",
  "350ml",
  3.50
);

bebidas.router.get((req, res) => {
  res.send(bebidas);
});
bebidas.router.post((req, res) => {
  res.send("post de rota bebidas");
});

app.use(bebidas.router.router);
