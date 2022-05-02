import { erro } from "../utils/LogHelper.js";

/**
 * @class representando um Combo
 * @private
 * Esta classe não pode ser instanciada diretamente
 */
export class Combos {
  /**
   *
   * @param {string} nome
   * @param {number} quantidade
   * @param {float} valor
   */
  constructor(nome, quantidade, valor) {

    /**
     * @property nome do combo
     * @private
     */
    this._nome = nome;
    /**
     * @property quantidade do combo
     * @private
     */
    this._quantidade = quantidade;
    /**
     * @property embalagem da bebida
     * @private
     */
    this._valor = valor;
    /**
     * @property medida em mililitros da bebida
     * @private
     */
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
  get quantidade() {
    return this._quantidade;
  }

  /**
   * @returns embalagem da bebida
   */
  get valor() {
    return this._valor;
  }
}