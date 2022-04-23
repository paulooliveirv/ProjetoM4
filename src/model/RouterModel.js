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
   * @param {string} caminho rota que será atribuída em todos
   * os verbos dessa instância
   */
  constructor(caminho) {
    /**
     * @private
     *@property {string} rota atribuída
     */
    this._caminho = caminho;

    /**
     * @private
     * @property {function} Instancia da funcção Router do express
     */
    this._router = express.Router({caseSensitive: false});
  }
  /**
  
   * @returns a propriedade express.Router()
   */
  get router() {
    return this._router;
  }
  /**
   * retorna a propriedade caminho
   * @returns retorna a rota atribuída 
   */
  get caminho() {
    return this._caminho;
  }
  /**
   * @method
   *  
   * método get para atribuição de uma função callback no
   * verbo get da rota
   * @param {requestCallback} callbackfn maneja a resposta e requisição
   * 
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
   * @param {String} params parametro do header da requisição
   * @param {requestCallback} callbackfn maneja a  requisição e resposta
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
   * @param {requestCallback} callbackfn maneja a requisição e resposta
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
   * @param {requestCallback} callbackfn maneja a requisição e resposta
   * @param {string} params parametro do header da requisição
   * @example this.delete('parametro', ()=>{
   * //
   * })
   */
  delete(params, callbackfn) {
    this._router.delete(`/${this._caminho}/:${params}`, callbackfn);
  }

  /**
   * @method
   * método put para atribuição de uma função callback no verbo put da rota
   * @example this.put('parametro', ()=>{
   * //
   * })
   * @param {string} params parametro do header da requisição
   * @param {requestCallback} callbackfn maneja a requisição e resposta
   */
  put(params, callbackfn) {
    this._router.put(`/${this._caminho}/:${params}`, callbackfn);
  }
}
