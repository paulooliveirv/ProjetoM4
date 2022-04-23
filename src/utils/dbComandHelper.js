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

export const filtro = (coluna, valor, tabela) =>
  `select * from ${tabela}
      where ${coluna} like '%${valor}%'`;

export const item = (id, tabela) => `select * from ${tabela}
where id = ${id}`;

export const excluido = (id, tabela) =>
  `delete from ${tabela} where id = ${id}`;

export const atualizado = (id, tabela) =>
  `update ${tabela} set nome =?, sabor= ?, embalagem = ?, ml= ?, preco=? where id= ${id}`;

// {
//   return (
//     `update ${tabela} set nome=?, sabor=?, embalagem=?, ml=?, preco=?
//     where id = ${id}`,
//     [body.nome, body.sabor, body.embalagem, body.ml, body.preco]
//   );
// };
