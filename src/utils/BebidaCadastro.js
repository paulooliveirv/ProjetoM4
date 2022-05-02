import { BebidasController } from "../controller/BebidasController.js";

/**
 * Retorna os valores da requisição
 * @param {object} obj
 * @returns {object} dados da bebida informada
 */
export const valores = (obj) => {
  let bebida = constroiBebida(obj);
  return novaBebida(bebida);
};

/**
 * Instancia uma nova classe BebidasController e retorna o valor
 * @param {object} obj dados obtidos através da requisição do corpo
 * @returns {object} nova classe BebidasController instanciada
 * com os dados da requisição
 * @throws error caso algum valor seja omitido
 */
const constroiBebida = (obj) => {
  return new BebidasController(
    obj.nome,
    obj.sabor,
    obj.embalagem,
    obj.ml,
    obj.preco
  );
};
/**
 * Filtra a classe BebidasController e retorna apenas
 * o modelo da tabela
 * @param {object} obj classe BebidasController instanciada
 * @returns {object} atributos pertinentes ao produto
 */
const novaBebida = (obj) => {
  return {
    nome: obj.nome,
    sabor: obj.sabor,
    embalagem: obj.embalagem,
    ml: obj.ml,
    preco: obj.preco,
  };
};
