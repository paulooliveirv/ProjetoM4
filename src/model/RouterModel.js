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
   * @method
   * método get para atribuição de uma função callback no
   * verbo get da rota
   * @param {function} callbackfn
   *@example this.get(()=>{
   *  //
   * })
   */
  get(callbackfn) {
    this._router.get(`/${this._caminho}`, callbackfn);
  }

  /**
   * @method
   * Método get para atribuição de uma função callback
   * com paramêtro na rota
   * @param {String} params
   * @param {function} callbackfn
   *
   * @example this.gentOnly('params', ()=>{
   * //
   * })
   */
  getOnly(params, callbackfn) {
    this._router.get(`/${this._caminho}/:${params}`, callbackfn);
  }

  /**
   * @method
   * método post para atribuição de uma função callback no
   * verbo post da rota
   * @param {function} callbackfn
   * @example this.post(()=>{
   * //
   * })
   */
  post(callbackfn) {
    this._router.post(`/${this._caminho}`, callbackfn);
  }

  /**
   * @method
   * método delete para atribuição de uma função callback
   * no verbo delete da rota
   * @param {function} callbackfn
   * @param {string} parametro
   * @example this.delete('parametro', ()=>{
   * //
   * })
   */
  delete(parametro, callbackfn) {
    this._router.delete(`/${this._caminho}/:${parametro}`, callbackfn);
  }

  /**
   * @method
   * método put para atribuição de uma função callback no verbo put da rota
   * @example this.put('parametro', ()=>{
   * //
   * })
   * @param {string} parametro
   * @param {function} callbackfn
   */
  put(parametro, callbackfn) {
    this._router.put(`/${this._caminho}/:${parametro}`, callbackfn);
  }
}
