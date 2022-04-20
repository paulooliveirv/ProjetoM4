import { error } from "../utils/LogsHelpers.js";

/**
 * @class
 * @private
 * Esta classe não pode ser instanciada diretamente
 */
export class Bebidas {
  /**
   * Construtor da classe Bebidas
   * @param {integer} id
   * @param {string} nome
   * @param {string} sabor
   * @param {string} embalagem
   * @param {float} ml
   * @param {float} preco
   */
  constructor(id, nome, sabor, embalagem, ml, preco) {
    if (this.constructor == Bebidas)
      throw new Error(
        error("Não é possível instanciar BebidasModel diretamente")
      );
    /**
     * @property
     * @private
     */
    this._id = id;
    /**
     * @property
     * @private
     */
    this._nome = nome;
    /**
     * @property
     * @private
     */
    this._sabor = sabor;
    /**
     * @property
     * @private
     */
    this._embalagem = embalagem;
    /**
     * @property
     * @private
     */
    this._ml = ml;
    /**
     * @property
     * @private
     */
    this._preco = preco;
  }
}
