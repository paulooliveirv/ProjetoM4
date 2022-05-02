import { Drinks} from "../model/DrinksModel.js";
import { Router } from "../model/RouterModel.js";
import { TabelaController } from "./TabelaController.js";



 export class DrinksController extends Drinks {
       /**
   * Construtor da classe DrinksController
   
   * @param {String} nome
   * @param {String} sabor
   * @param {float} preco
   */

constructor(nome, sabor, preco) {
    super(nome, sabor, preco);

   this.Tabela = new TabelaController ("Drinks");
    
/**
 *
 * @instance
 * instancia da Classe Router
 */
this.router = new Router("Drinks");
}
}
const drinks = new  DrinksController();

drinks.router.get((req, res) => {

    drinks.Tabela.requisitarTabela()
      .then((data) => res.send({ Drinks: data }))
      .catch((err) => {
        res.status(404).send({ erro: err });
      });

  });

  
 

  drinks.router.post((req, res) => {
    
   drinks.Tabela.incluirDrink(req.body) 
      .then((data) => res.send(data))
      .catch((err) => {
        console.log(err);
        res.status(406).send(err);
      });
      console.log(req)
  }); 

 
drinks.router.filter("col", "valor", (req, res) => {
    let coluna = req.params.col;
    let valor = req.params.valor;
   drinks.Tabela.filtraTabela(coluna, valor)
      .then((data) => res.send(data))
      .catch((err) => {
        console.log(err);
        res.status(404).send({erro: "Item não encontrado" });
      });
  });

  
drinks.router.getOnly("id", (req, res) => {
   drinks.Tabela.requisitarItem(req.params.id)
      .then((data) => res.send(data))
      .catch((err) => {
        res.status(404).send({ erro: "Item não encontrado" });
        console.log(err);
      });
  });
 
  drinks.router.delete("id", (req, res) => {
    drinks.Tabela.deletarItem(req.params.id)
      .then((data) => res.send(data))
      .catch((err) => console.log(err));
  });

  
  drinks.router.put("id", (req, res) => {
    drinks.Tabela.atualizarDrinks(req.params.id, req.body)
      .then((data) => res.status(200).send(data))
      .catch((err) => res.status(428).send(err));
  });
  
  export const moduloDrinks = drinks.router.router;
  