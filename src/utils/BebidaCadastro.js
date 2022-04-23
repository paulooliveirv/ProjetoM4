import { BebidasController } from "../controller/BebidasController.js";
import { erro } from "./LogHelper.js";

/**
 * Retorna os valores da requisição
 * @param {object} obj
 * @returns {object} dados da bebida informada
 */
export const valores = (obj) => {
  let bebida = verificaObj(obj);
  if (!bebida) console.log(erro("Valores não informados devidamente"));
  return novaBebida(bebida);
};

/**
 * Verifica se todos os valores do produto foram informados e se não são nulos
 * @param {object} obj dados obtidos através da requisição do corpo
 * @returns {object} nova classe BebidasController instanciada
 * com os dados da requisição
 * @throws error caso algum valor seja omitido
 */
const verificaObj = (obj) => {
  try {
    if (contemValores(obj))
      return new BebidasController(
        obj.nome,
        obj.sabor,
        obj.embalagem,
        obj.ml,
        obj.preco
      );

    throw new Error("Valores não podem ser nulos ou inexistentes");
  } catch (err) {
    console.log(erro(err));
  }
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

/**
 *
 * @param {object} obj - dados obtidos através da requisição do corpo
 * @returns boolean
 */
const contemValores = (obj) => {
  return obj.nome && obj.sabor && obj.embalagem && obj.ml && obj.preco
    ? true
    : false;
};
