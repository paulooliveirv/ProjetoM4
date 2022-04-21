import { Bebidas } from "../model/BebidasModel.js";
import { Router } from "../model/routerModel.js";
import express from "express";
export class BebidasController extends Bebidas {
  constructor(nome, sabor, embalagem, ml, preco) {
    super(0, nome, sabor, embalagem, ml, preco);
    this.router = new Router("bebidas");
    this.modulo = this.router.router;
  }
}

const bebidas = new BebidasController("skol", "pilsen", "lata", 350, 4.5);

bebidas.router.get((req, res) => {
  res.send(bebidas);
});
bebidas.router.post((req, res) => {
  res.send("<h1> post para bebidas</h1>");
});

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

export const moduloBebidas = bebidas.modulo