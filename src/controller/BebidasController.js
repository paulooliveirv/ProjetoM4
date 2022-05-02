import { Bebidas } from "../model/BebidasModel.js";
import { Router } from "../model/RouterModel.js";
import { valores } from "../utils/BebidaCadastro.js";
import { valida } from "../utils/validacao.js";
import { TabelaController } from "./TabelaController.js";

export class BebidasController extends Bebidas {
  /**
   * Construtor da clsee BebidasController
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
    .then((data) => res.status(200).json({ bebidas: data }))
    .catch((err) => {
      res.status(404).json({ erro: err });
    });
});

bebidas.router.post((req, res) => {
  let resposta = valida(req.body);
  if (resposta !== true) {
    res.status(400).json({ erro: resposta });
  } else {
    const bebida = valores(req.body);
    bebidas.Tabela.incluirBebida(bebida).then((data) =>
      res.status(201).json({ [data]: req.body })
    );
  }
});

bebidas.router.filter("col", "valor", (req, res) => {
  const { col, valor } = req.params;
  bebidas.Tabela.filtraTabela(col, valor)
    .then((data) => res.status(200).json({ [col]: data }))
    .catch((err) => {
      console.log(err);
      res.status(404).send({ erro: "Item não encontrado" });
    });
});

bebidas.router.getOnly("id", (req, res) => {
  bebidas.Tabela.requisitarItem(req.params.id)
    .then((data) => res.status(200).json(data))
    .catch((err) => {
      res.status(404).json({ erro: "Item não encontrado" });
      console.log(err);
    });
});

bebidas.router.delete("id", (req, res) => {
  bebidas.Tabela.deletarItem(req.params.id)
    .then((data) => res.status(200).json({ [data]: req.params.id }))
    .catch((err) => {
      console.log(err);
    });
});

bebidas.router.put("id", (req, res) => {
  let resposta = valida(req.body);

  if (resposta !== true) {
    res.status(400).send({ erro: resposta });
  } else {
    bebidas.Tabela.atualizarBebida(req.params.id, req.body)
      .then((data) => res.status(200).json({ [data]: req.params.id }))
      .catch((err) => res.status(428).json({ erro: err }));
  }
});

export const moduloBebidas = bebidas.modulo;
