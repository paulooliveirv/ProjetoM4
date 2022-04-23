/**
 *
 * @param {string} tabela tabela que deseja requisitar
 * @returns {string} `select * from ${tabela}`
 */
export const selecioneTudo = (tabela) => `select * from ${tabela}`;

/**
 *
 * @param {string} body corpo da requisição
 * @param {string} tabela tabela que deseja inserir os valores
 * @returns {string} insert into ${tabela} (rows) values
 */
export const inserirValores = (obj, tabela) =>
  `insert into ${tabela}
    (nome, sabor, embalagem, ml, preco)
    values
(
    '${obj.nome}',
    '${obj.sabor}',
    '${obj.embalagem}',
    '${obj.ml}',
    '${obj.preco}'
)
`;
