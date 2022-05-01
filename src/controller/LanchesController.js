import { Lanches } from "../model/LanchesModel.js";
import { Router } from "../model/routerModel.js";
import { TabelaController } from "./TabelaController.js";

export class LanchesController extends Lanches {
  /**
   * Construtor da clsee LanchesController
   * @param {String} nome
   * @param {String} sabor
   * @param {float} preco
   */
  constructor(nome, sabor, preco) {
    super(nome, sabor, preco);
    /**
     *
     * @instance
     * instancia da Classe Router
     */
    this.router = new Router("Lanches");
    /**
     * @property
     * modulo da classe Router instanciada
     */
    this.modulo = this.router.router;

    this.Tabela = new TabelaController("Lanches");
  }
}
const lanches = new LanchesController();

lanches.router.get((req, res) => {
  lanches.Tabela.requisitarTabela()
    .then((data) => res.status(200).json({ Lanches: data }))
    .catch((err) => {
      res.status(404).json({ erro: err });
    });
});

lanches.router.post((req, res) => {
  try {    
    lanches.Tabela.incluirLanches(req.body).then((data) =>
      res.json({ [data]: req.body })
    );
  } catch (erro) {
    res.status(406).json({ erro: "Verifique os valores" });
  }
});

lanches.router.filter("col", "valor", (req, res) => {
  const { col, valor } = req.params;
  lanches.Tabela.filtraTabela(col, valor)
    .then((data) => res.status(200).json({ [col]: data }))
    .catch((err) => {
      console.log(err);
      res.status(404).send({ erro: "Item não encontrado" });
    });
});

lanches.router.getOnly("id", (req, res) => {
  lanches.Tabela.requisitarItem(req.params.id)
    .then((data) => res.status(200).json(data))
    .catch((err) => {
      res.status(404).json({ erro: "Item não encontrado" });
      console.log(err);
    });
});

lanches.router.delete("id", (req, res) => {
  lanches.Tabela.deletarItem(req.params.id)
    .then((data) => res.status(200).json({ [data]: req.params.id }))
    .catch((err) => console.log(err));
});

lanches.router.put("id", (req, res) => {
  lanches.Tabela.atualizarLanches(req.params.id, req.body)
    .then((data) => res.status(200).json({ [data]: req.params.id }))
    .catch((err) => res.status(428).json({ erro: err }));
});

export const moduloLanches= lanches.modulo;
