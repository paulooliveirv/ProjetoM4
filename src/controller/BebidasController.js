import { Bebidas } from "../model/BebidasModel.js";
import { Router } from "../model/routerModel.js";
import { bannerErro } from "../view/banner.js";
import { BancoController } from "./BancoController.js";

export class BebidasController extends Bebidas {
  constructor(id, nome, sabor, embalagem, ml, preco) {
    super(id, nome, sabor, embalagem, ml, preco);
    this.router = new Router("bebidas");
    this.modulo = this.router.router;
    this.banco = new BancoController();
  }
}

const bebidas = new BebidasController();

bebidas.router.get((req, res) => {
  bebidas.banco
    .requisitarTabela("bebidas")
    .then((tabela) => res.send({Bebidas: tabela }))
    .catch((err) => {
      res.send(bannerErro("Tabela não encontrada"));
      throw new Error(err);
    });
});

bebidas.router.post((req, res) => {});

let id = "1";
bebidas.router.getOnly(id, (req, res) => {
  const num = Object.values(req.params);
  res.send(`Retornar apenas objeto que bate com o param ${num}`);
});

bebidas.router.delete(id, (req, res) => {
  const num = Object.values(req.params);
  res.send(`Deletar apenas objeto que bate com o param ${num}`);
});

bebidas.router.put(id, (req, res) => {
  const num = Object.values(req.params);
  res.send(`atualizar apenas objeto que bate com o param ${num}`);
});

export const moduloBebidas = bebidas.modulo;
