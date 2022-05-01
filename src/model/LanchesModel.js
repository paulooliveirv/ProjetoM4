import { erro } from "../utils/LogHelper.js";

/**
 * @class representando um produto Lanches
 * @private
 * Esta classe não pode ser instanciada diretamente
 */
export class Lanches {
  /**
   *
   * @param {string} nome
   * @param {string} sabor
   * @param {float} preco
   */
  constructor(nome, sabor, preco) {
    if (this.constructor == Lanches)
      throw new Error(
        erro("Não é possível instanciar LanchesModel diretamente")
      );

    /**
     * @property nome dp lanche
     * @private
     */
    this._nome = nome;
    /**
     * @property sabor do lanche
     * @private
     */
    this._sabor = sabor;
    /**

     * @property preço do lanche
     * @private
     */
    this._preco = preco;
  }

  /**
   * @returns nome do Lanche
   */
  get nome() {
    return this._nome;
  }
  /**
   * @returns sabor do lanche
   */
  get sabor() {
    return this._sabor;
  }

  /**
   * @returns preço do Lanche
   */
  get preco() {
    return this._preco;
  }
}
