import express from "express";
import { moduloBebidas } from "./controller/BebidasController.js";
import {erro, attention } from "./utils/LogHelper.js";
import { bannerMsg } from "./view/banner.js";
const app = express();
const port = 3000;

try {
  app.listen(port, () =>
    console.log(attention(`app funcionando em http://localhost:${port}`))
  );
} catch (error) {
  console.log(erro(error));
}

app.get("/", (req, res) => {
  res.send(bannerMsg("Porta Principal Funcionando"));
});

app.use(moduloBebidas, express.json);
