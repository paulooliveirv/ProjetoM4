import { Bebidas } from "../model/BebidasModel.js";
import { Router } from "../model/routerModel.js";

export class BebidasController extends Bebidas {
  constructor(nome, sabor, embalagem, ml, preco) {
      
    super(0, nome, sabor, embalagem, ml, preco);
    this.router = new Router("bebidas");
  }
}
