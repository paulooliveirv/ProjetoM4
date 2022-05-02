import { Combos } from "../model/CombosModel.js";
import { Router } from "../model/RouterModel.js";
import { TabelaController } from "./TabelaController.js";

export class CombosController extends Combos {
  /**
   * Construtor da classe BebidasController
   * @param {String} nome
   * @param {number} quantidade
   * @param {String} valor
   */
  constructor(nome, quantidade, valor) {
    super(nome, quantidade, valor);
    /**
     *
     * @instance
     * instancia da Classe Router
     */
    this.router = new Router("combos");
    /**
     * @property
     * modulo da classe Router instanciada
     */
    this.modulo = this.router.router;

    this.Tabela = new TabelaController("combos");
  }
}
const combos = new CombosController();

combos.router.get((req, res) => {
  combos.Tabela.requisitarTabela()
    .then((data) => res.status(200).json({ combos: data }))
    .catch((err) => {
      res.status(404).json({ erro: err });
    });
});

combos.router.post((req, res) =>{
  let {nome, quantidade, valor } = req.body;
  combos.Tabela.incluirCombos(req.body)
  .then(msg => {res.send(msg)})
  .catch(err =>{res.send(msg)})
});


combos.router.filter("col", "valor", (req, res) => {
  const { col, valor } = req.params;
  combos.Tabela.filtraTabela(col, valor)
    .then((data) => res.status(200).json({ [col]: data }))
    .catch((err) => {
      console.log(err);
      res.status(404).send({ erro: "Item não encontrado" });
    });
});

combos.router.put("id", (req,res) => {
  combos.Tabela.atualizarCombos(req.params.id, req.body)
  .then((data) => res.status(200).json({ [data]: req.params.id }))
  .catch((err) => res.status(428).json({ erro: err }));
})

combos.router.getOnly("id", (req, res) => {
  combos.Tabela.requisitarItem(req.params.id)
    .then((data) => res.status(200).json(data))
    .catch((err) => {
      res.status(404).json({ erro: "Item não encontrado" });
      console.log(err);
    });
});

combos.router.delete("id", (req, res) => {
  combos.Tabela.deletarItem(req.params.id)
    .then((data) => res.status(200).json({ [data]: req.params.id }))
    .catch((err) => {
      console.log(err);
    });
});

export const moduloCombos = combos.modulo;