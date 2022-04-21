import { erro, ok } from "./LogHelper.js";

export const search = {
    /***
     * @method
     * Verifica se a tabela informada existe nesta instância
     * e retorna o resultado de uma Promise
     * @param{string} tabela informe a tabela para verificação
     * @returns Promise
     */
  tabela: (tabela) => {
    if (!tabela) {
      return Promise.reject(erro("tabela não encontrada"));
    } else {
      return Promise.resolve(ok("tabela encontrada"));
    }
  },
};


let teste = [
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
