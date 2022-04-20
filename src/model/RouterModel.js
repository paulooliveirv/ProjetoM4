import express from "express";

/**
 * @Class
 * instancie a classe Router passando como paramêtro o caminho da rota
 * que será utilizada. Cada instanciamento gera um objeto Router do express
 * para utilizar os verbos http.
 * @example const example = new Router('example');
 */
export class Router {
  /**
   * @constructs
   * Construtor da classe Router
   * @param {string} caminho
   */
  constructor(caminho) {
    /**
     * @private
     *@property {string}
     */
    this._caminho = caminho;
    /**
     * @private
     * @property
     */
    this._app = express();
    /**
     * @private
     * @property {function} router
     */
    this._router = express.Router();
  }
  /**
   * retorna a propriedade router
   * @returns this._router
   */
  get router() {
    return this._router;
  }
  /**
   * retorna a propriedade caminho
   * @returns this._caminho
   */
  get caminho() {
    return this._caminho;
  }
  /**
   * retorna a propriedade app
   * @returns this._app
   */
  get app() {
    return this._app;
  }
  /**
   * @method
   * método get para atribuição de uma função callback no
   * verbo get da rota
   * @param {function} callbackfn
   *
   * @example
   * this.get(callbackfn)
   */
  get(callbackfn) {
    this._router.get(`/${this._caminho}`, callbackfn);
  }

  /**
   * @method
   * método post para atribuição de uma função callback no
   * verbo post da rota
   * @param {function} callbackfn
   *
   * @example
   * this.post(callbackfn)
   */
  post(callbackfn) {
    this._router.post(`/${this._caminho}`, callbackfn);
  }

}
