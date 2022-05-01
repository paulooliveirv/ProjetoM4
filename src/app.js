import express from "express";
import cors from "cors";
import { moduloBebidas } from "./controller/BebidasController.js";
import { bannerErro, bannerMsg } from "./view/banner.js";
const app = express();

app.use(express.json(), cors());

app.use(moduloBebidas);

app.get("/", (req, res) => {
  res.send(bannerMsg("Porta Principal Funcionando"));
});

app.get("/*", (req, res) => {
  res.status(404).send(bannerErro("Página não encontrada"));
});

export default app;

