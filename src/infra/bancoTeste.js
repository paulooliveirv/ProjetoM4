export class Banco {
  /**
   *
   * @param  {Array} bebidas array de objetos bebidas
   */
  constructor(bebidas, drinks) {
    this._bebidas = [];
    this._drinks = [];
  }

  get bebidas() {
    return this._bebidas;
  }
  get drinks() {
    return this._drinks;
  }
}
