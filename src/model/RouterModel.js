import express from "express";

/**
 * instancia uma classe recebendo como parametro o caminho da rota
 * que será utilizada. Cada instanciamento gera um objeto Router do express
 * para utilizar os verbos http.
 *
 * @params {string} caminho
 *
 *
 */
export class Router {
  constructor(caminho) {
    this._caminho = caminho;
    this._router = express.Router();
  }

  get router() {
    return this._router;
  }
  get(fn) {
    this._router.get(`/${this._caminho}`, fn);
  }
}
