import { bd } from "../services/sqlite-db.js";

import {
  selecioneTudo,
  inserirBebidas,
  filtro,
  item,
  excluido,
  atualizaBebida,
} from "../utils/dbComandHelper.js";
import { erro } from "../utils/LogHelper.js";

/**
 * @class
 * Instancia de uma tabela com métodos que se comunicam
 * com a sintaxe SQLite.
 */
export class TabelaController {
  /**
   * 
   * @param {string} tabela nomeia a tabela que a classe representará
   * nos métodos.
   */
  constructor(tabela) {
    /**
     * @property
     * representa a instancia do banco de dados SQLite
     */
    this.bd = bd;

    /**
     * @property
     * tabela informada para representar a tabela na sintaxe SQLite
     */
    this.tabela = tabela;
  }

  /**
   * Requisita a tabela e retorna uma Promise com a resposta
   * @returns Promise
   *
   * @example this.requisitarTabela()
   * .then(data => ...)
   * .catch(err => ...)
   */
  requisitarTabela() {
    return new Promise((resolve, reject) => {
      this.bd.all(selecioneTudo(this.tabela), (err, rows) => {
        if (err) reject(erro(err));
        resolve(rows);
      });
    });
  }
  /**
   * filtra a tabela e retorna o resultado de acordo com
   * os valores passados
   * @param {string} coluna coluna existente da tabela
   * @param {string} valor parâmetro que servirá de filtro
   * @returns Promise
   * @example this.filtraTabela('coluna', 'valor')
   * .then(data => ...)
   * .catch(err => ...)
   */
  filtraTabela(coluna, valor) {
    return new Promise((resolve, reject) => {
      this.bd.all(filtro(coluna, valor, this.tabela), (err, row) => {
        if (err) reject(err);
        resolve(row);
      });
    });
  }

  /**
   * Solicita um item através do ID e
   * retorna uma promise com o resultado
   * @param {string} id id do produto
   * @returns Promise
   *
   * @example this.requisitarItem(id)
   * .then(data => ...)
   * .catch(err => ...)
   */
  requisitarItem(id) {
    return new Promise((resolve, reject) => {
      this.bd.get(item(id, this.tabela), (err, row) => {
        if (!row) reject(erro("Item não encontrado"));
        resolve(row);
      });
    });
  }

  /**
   * Deleta um item da tabela através do ID
   * e retorna uma Promise com o resultado
   * @param {string} id
   * @returns Promise
   * @example this.deletarItem(id)
   * .then(data => ...)
   * .catch(err => ...)
   */
  deletarItem(id) {
    return new Promise((resolve, reject) => {
      this.bd.get(excluido(id, this.tabela), (err, row) => {
        if (err) reject(err);
        resolve("Item apagado");
      });
    });
  }

  atualizarBebida(id, body) {
    return new Promise((resolve, reject) => {
      this.bd.run(
        atualizaBebida(id, this.tabela),
        Object.values(body),
        (result, err) => {
          if (err) reject(err);
          resolve("Produto atualizado", result);
        }
      );
    });
  }
  /**
   * Insere novos valores na tabela Bebidas selecionada e
   * retorna uma Promise com o resultado da requisição.
   *
   * @param {object} body valores que serão inseridos
   * @returns Promise
   *
   * @example this.inserirLinhas('body')
   * .then(data => ...)
   * .catch(err => ...)
   */
  incluirBebida(body) {
    return new Promise((resolve, reject) => {
      this.bd.run(
        inserirBebidas(body, this.tabela),
        Object.values(body),
        (resul, err) => {
          if (err) reject(erro(err));
          resolve("Produto adicionado com sucesso");
        }
      );
    });
  }
}
