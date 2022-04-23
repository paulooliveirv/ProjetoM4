import { rejects } from "assert";
import { resolve } from "path";
import { bd } from "../infra/sqlite-db.js";

export class BancoController {
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
      this.bd.all(
        `
    select * from ${tabela}
    `,
        (err, rows) => {
          if (err) reject(err);
          resolve(rows);
        }
      );
    });
  }
}
