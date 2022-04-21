export class Banco {
  constructor(...bebidas) {
    this._bebidas = [];
  }

  get bebidas() {
    return this._bebidas;
  }
}
