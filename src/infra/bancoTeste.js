export class Banco {
  /**
   *
   * @param  {Array} bebidas
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
