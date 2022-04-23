import { erro } from "../utils/LogHelper.js";

/**
 * @class representando um produto bebida
 * @private
 * Esta classe não pode ser instanciada diretamente
 */
export class Bebidas {
  /**
   *
   * @param {integer} id
   * @param {string} nome
   * @param {string} sabor
   * @param {string} embalagem
   * @param {float} ml
   * @param {float} preco
   */
  constructor(nome, sabor, embalagem, ml, preco) {
    if (this.constructor == Bebidas)
      throw new Error(
        erro("Não é possível instanciar BebidasModel diretamente")
      );
    /**
     * @property id da bebida
     * @private
     */

    /**
     * @property nome da bebida
     * @private
     */
    this._nome = nome;
    /**
     * @property sabor da bebida
     * @private
     */
    this._sabor = sabor;
    /**
     * @property embalagem da bebida
     * @private
     */
    this._embalagem = embalagem;
    /**
     * @property medida em mililitros da bebida
     * @private
     */
    this._ml = ml;
    /**
     * @property preço da bebida
     * @private
     */
    this._preco = preco;
  }

  /**
   * @returns id da bebida
   */
  get id() {
    return this._id;
  }
  /**
   * @returns nome da bebida
   */
  get nome() {
    return this._nome;
  }
  /**
   * @returns sabor da bebida
   */
  get sabor() {
    return this._sabor;
  }

  /**
   * @returns embalagem da bebida
   */
  get embalagem() {
    return this._embalagem;
  }

  /**
   * @returns ml da bebida
   */
  get ml() {
    return this._ml;
  }

  /**
   * @returns preço da bebida
   */
  get preco() {
    return this._preco;
  }
}
