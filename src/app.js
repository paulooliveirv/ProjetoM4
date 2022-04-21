import express from "express";
import { moduloBebidas } from "./controller/BebidasController.js";
import { ok, erro, attention } from "./utils/LogsHelpers.js";
const app= express();
const port = 3000;

try {
  app.listen(port, () =>
    console.log(ok(`app funcionando em http://localhost:${port}`))
  );
} catch (error) {
  console.log(erro(error));
}


app.get("/", function (req, res) {
  res.send("Hello World teste de porta");
});


app.use(moduloBebidas, express.json);