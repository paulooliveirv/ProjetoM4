import { Bebidas } from "../model/BebidasModel.js";
import { Router } from "../model/routerModel.js";

export class BebidasController extends Bebidas {
  constructor(nome, sabor, embalagem, ml, preco) {
    super(0, nome, sabor, embalagem, ml, preco);
    this.router = new Router("bebidas");
  }
}

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

bebidas.router.use;
