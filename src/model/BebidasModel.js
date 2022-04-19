import { error } from "../utils/LogsHelpers.js";

export class Bebidas {
  constructor(id, nome, sabor, embalagem, ml) {
    if (this.constructor == Bebidas)
      throw new Error(
        error("Não é possível instacianar BebidasModel diretamente")
      );

    this._id = id;
    this._nome = nome;
    this._sabor = sabor;
    this._embalagem = embalagem;
    this._ml = ml;
  }
}
