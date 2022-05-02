import { erro } from "../utils/LogHelper.js";

/**
 * @class representando um Drink
 * @private
 * Esta classe não pode ser instanciada diretamente
 */
export class Drinks {
  /**
   
   * @param {string} nome
   * @param {string} sabor
   * @param {float} preco
   */

  constructor(nome, sabor,  preco) {
    if (this.constructor == Drinks)
      throw new Error(
        erro("Não é possível instanciar DrinksModel diretamente")
      );
    /**
     * @property id do drink
     * @private
     */

    /**
     * @property nome do drink
     * @private
     */
    this._nome = nome;
    /**
     * @property sabor do drink
     * @private
     */
    this._sabor = sabor;
    /**
   
    /**
     * @property preço do drink
     * @private
     */
    this._preco = preco;
  }

  /**
   * @returns id do drink
   */
  get id() {
    return this._id;
  }
  /**
   * @returns nome do drink
   */
  get nome() {
    return this._nome;
  }
  /**
   * @returns sabor do drink
   */
  get sabor() {
    return this._sabor;
  }

 

  /**
   * @returns preço do drink
   */
  get preco() {
    return this._preco;
  }
}
