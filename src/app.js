import express from "express";
import { ok, erro, attention } from "./utils/LogsHelpers.js";
import { BebidasController } from "./controller/BebidasController.js";
const app = express();
const port = 3000;

try {
  app.listen(port, () =>
    console.log(ok(`app funcionando em http://localhost:${port}`))
  );
} catch (error) {
  console.log(erro(error));
}

// app.get("/", function (req, res) {
//   res.send("Hello World teste de porta");
// });

const bebidas = new BebidasController(
  "skol",
  "puro malte",
  "lata",
  "350ml",
  3.5
);

bebidas.router.get((req, res) => {
  res.send(bebidas);
});
bebidas.router.post((req, res) => {
  res.send("post de rota bebidas");
});

bebidas.router.app.use(bebidas.router.router);
