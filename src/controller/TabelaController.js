import { bd } from "../infra/sqlite-db.js";

import { selecioneTudo, inserirValores } from "../utils/dbComandHelper.js";
import { erro } from "../utils/LogHelper.js";

export class TabelaController {
  constructor() {
    this.bd = bd;
  }

  /**
   * Requisita a tabela e retorna uma Promise com a resposta
   * @param {string} tabela nome da tabela que deseja procurar no banco
   * @returns Promise
   *
   * @example this.requisitarTabela('teste')
   * .then(data => //)
   * .catch(err => //)
   */
  requisitarTabela(tabela) {
    return new Promise((resolve, reject) => {
      this.bd.all(selecioneTudo(tabela), (err, rows) => {
        if (err) reject(erro(err));
        resolve(rows);
      });
    });
  }
  /**
   * Insere novos valores na tabela selecionada e
   * retorna uma Promise com o resultado da requisição.
   * @param {string} body
   * @param {string} tabela
   * @returns Promise
   *
   * @example this.inserirLinhas('body', 'tabela')
   * .then(data => //)
   * .catch(err => )
   */
  inserirLinhas(body, tabela) {   
    return new Promise((resolve, reject) => {
      this.bd.run(inserirValores(body, tabela), (resul, err) => {
        if (err) reject(erro(err));
        resolve("Produto adicionado com sucesso");
      });
    });
  }
}
