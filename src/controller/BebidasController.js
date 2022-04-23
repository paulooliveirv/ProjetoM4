import { Bebidas } from "../model/BebidasModel.js";
import { Router } from "../model/routerModel.js";
import { valores } from "../utils/BebidaCadastro.js";
import { TabelaController } from "./TabelaController.js";

export class BebidasController extends Bebidas {
  /**
   * Construtor da clsee BebidasController
   * @param {String} id
   * @param {String} nome
   * @param {String} sabor
   * @param {String} embalagem
   * @param {float} ml
   * @param {float} preco
   */
  constructor(nome, sabor, embalagem, ml, preco) {
    super(nome, sabor, embalagem, ml, preco);
    /**
     *
     * @instance
     * instancia da Classe Router
     */
    this.router = new Router("bebidas");
    /**
     * @property
     * modulo da classe Router instanciada
     */
    this.modulo = this.router.router;

    this.Tabela = new TabelaController();
  }
}

const bebidas = new BebidasController();
bebidas.router.get((req, res) => {
  bebidas.Tabela.requisitarTabela("bebidas")
    .then((data) => res.send({ bebidas: data }))
    .catch((err) => console.log(err));
});

bebidas.router.post(async (req, res) => {
  let bebida = valores(req.body);
  await bebidas.Tabela.inserirLinhas(bebida, "bebidas")
    .then((data) => res.send(data))
    .catch((err) => console.log(err));
});

bebidas.router.getOnly("id", (req, res) => {
  const num = req.params.id;
  res.send(`Retornar apenas objeto que bate com o param ${num}`);
});

bebidas.router.delete("id", (req, res) => {
  const num = req.params.id;
  res.send(`Deletar apenas objeto que bate com o param ${num}`);
});

bebidas.router.put("id", (req, res) => {
  const num = req.params.id;
  res.send(`atualizar apenas objeto que bate com o param ${num}`);
});

export const moduloBebidas = bebidas.modulo;

// ( bebidas.banco
//   .requisitarTabela("bebidas")
//   .then((tabela) => res.send({ Bebidas: tabela }))
//   .catch((err) => {
//     res.send(bannerErro("Tabela não encontrada"));
//     throw new Error(err);
//   }))
