import chalk from "chalk";
/**
 * Estiliza a mensagem para vermelho
 * @example console.log(erro('Hello World'))
 */
export const erro = chalk.bold.red;

/**
 * Estiliza a mensagem para amarelo
 * @example console.log(attention('Hello World'))
 */
export const attention = chalk.italic.yellow;

/**
 * Estiliza a mensagem para verde
 * @example console.log(ok('Hello World'))
 */
export const ok = chalk.italic.green;

;
