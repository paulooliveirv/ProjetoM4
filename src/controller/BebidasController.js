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

    this.Tabela = new TabelaController("bebidas");
  }
}

const bebidas = new BebidasController();
bebidas.router.get((req, res) => {
  bebidas.Tabela.requisitarTabela()
    .then((data) => res.send({ bebidas: data }))
    .catch((err) => {
      res.status(404).send({ erro: err });
    });
});

bebidas.router.post((req, res) => {
  let bebida = valores(req.body);
  bebidas.Tabela.incluirBebida(bebida)
    .then((data) => res.send(data))
    .catch((err) => {
      console.log(err);
      res.status(406).send(err);
    });
});

bebidas.router.filter("col", "valor", (req, res) => {
  let coluna = req.params.col;
  let valor = req.params.valor;
  bebidas.Tabela.filtraTabela(coluna, valor)
    .then((data) => res.send(data))
    .catch((err) => {
      console.log(err);
      res.status(404).send({ erro: "Item não encontrado" });
    });
});

bebidas.router.getOnly("id", (req, res) => {
  bebidas.Tabela.requisitarItem(req.params.id)
    .then((data) => res.send(data))
    .catch((err) => {
      res.status(404).send({ erro: "Item não encontrado" });
      console.log(err);
    });
});

bebidas.router.delete("id", (req, res) => {
  bebidas.Tabela.deletarItem(req.params.id)
    .then((data) => res.send(data))
    .catch((err) => console.log(err));
});

bebidas.router.put("id", (req, res) => {
  bebidas.Tabela.atualizarBebida(req.params.id, req.body)
    .then((data) => res.status(200).send(data))
    .catch((err) => res.status(428).send(err));
});

export const moduloBebidas = bebidas.modulo;

// ( bebidas.banco
//   .requisitarTabela("bebidas")
//   .then((tabela) => res.send({ Bebidas: tabela }))
//   .catch((err) => {
//     res.send(bannerErro("Tabela não encontrada"));
//     throw new Error(err);
//   }))
