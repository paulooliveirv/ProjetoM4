import express from "express";
import cors from "cors";
import { moduloBebidas } from "./controller/BebidasController.js";
import { moduloLanches } from "./controller/LanchesController.js";
import { moduloCombos } from "./controller/CombosController.js";
import { bannerErro, bannerMsg } from "./view/banner.js";
import { moduloDrinks } from "./controller/DrinksController.js";
import { moduloPetiscos } from "./controller/PetiscosController.js";
const app = express();

app.use(express.json(), cors());

app.use(moduloBebidas, moduloLanches, moduloDrinks, moduloCombos, moduloPetiscos);

app.get("/", (req, res) => {
  res.send(bannerMsg("Porta Principal Funcionando"));
});

app.get("/*", (req, res) => {
  res.status(404).send(bannerErro("Página não encontrada"));
});

export default app;
