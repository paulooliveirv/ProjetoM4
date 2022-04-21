import { Banco } from "../infra/bancoTeste.js";
import { search } from "../utils/searchHelper.js";

export class BancoController extends Banco {
  constructor(...bebidas) {
    super(...bebidas);
    this._bebidas = [
      {
        id: 0,
        nome: "Cerveja Brahma",
        sabor: "Duplo Malte",
        embalagem: "Lata",
        ml: 350,
        preco: 3.09,
      },
      {
        id: 1,
        nome: "Cerveja Brahma",
        sabor: "Duplo Malte",
        embalagem: "Garrafa",
        ml: 600,
        preco: 7.49,
      },
      {
        id: 2,
        nome: "Cerveja Stella Artois",
        sabor: "Puro Malte",
        embalagem: "Long Neck",
        ml: 275,
        preco: 4.69,
      },
      {
        id: 3,
        nome: "Cerveja Budweiser",
        sabor: "American Larger",
        emabalagem: "Lata",
        ml: 269,
        preco: 3.29,
      },
      {
        id: 4,
        nome: "Cerveja Budweiser",
        sabor: "American Larger",
        embalagem: "Long Neck",
        ml: 330,
        preco: 4.13,
      },
    ];
  }
  /**
   * @method
   * Retorna uma Promise auxiliar com a informação
   * sobre o resultado
   * @param {string} tabela 
   * @returns Promise
   * 
   * @example this.requisitarTabela('tabela')
   */
  requisitarTabela(tabela) {
    return search.tabela(this[tabela])
    .then((msg) => {
      console.log(msg);
      return this[tabela];
    });
  }
}
