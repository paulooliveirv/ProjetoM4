import {Router} from "../model/RouterModel.js";
import {Petiscos} from "../model/petiscosModel.js";
import {TabelaController} from "../controller/TabelaController.js";

const rotaPetiscos = new Router("petiscos");
const tabelaPetiscos = new TabelaController("petiscos");

rotaPetiscos.get((req, res) => {
    tabelaPetiscos.requisitarTabela()
    .then(data => {res.json(data)})
    .catch(err => {res.send(err)})
    });


    rotaPetiscos.post((req, res) => {
        const {nome,preco, tamanho} = req.body;
        const novoPetisco = new Petiscos(nome,preco, tamanho)
        tabelaPetiscos.incluirPetiscos(novoPetisco)
        .then(data => {res.json(data)})
        .catch(err =>{res.send(err)})
    });

    rotaPetiscos.put("id",(req, res) => {
        const {id} = req.params
        tabelaPetiscos.atualizarPetiscos(id, req.body)
        .then(data => {res.json(data)})
        .catch(err => {res.send(err)})
    })

    rotaPetiscos.getOnly("id", (req, res) => {
        tabelaPetiscos.requisitarItem(req.params.id)
        .then(data => {res.json(data)})
        .catch(err => {res.send(err)})
    })

    rotaPetiscos.filter("col", "valor", (req, res) => {
        const { col, valor} = req.params
        tabelaPetiscos.filtraTabela(col, valor)
        .then(data => {res.json(data)})
        .catch(err => {res.send(err)})
    })

    rotaPetiscos.delete("id", (req, res) => {
        tabelaPetiscos.deletarItem(req.params.id)
        .then(data => {res.json(data)})
        .catch(err => {res.send(err)})
    })
    



export const moduloPetiscos = rotaPetiscos.router;