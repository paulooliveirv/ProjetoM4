/**
 *
 * @param {string} msg mensagem que será exibida como resposta de
 * erro à aquisição em formato de documento HTML
 * @returns document object
 */
export const bannerErro = (msg) => `<h1 style="color: red; text-align:center;">
${msg}
</h1>`;

/**
 *
 * @param {string} msg mensagem que será exibida como resposta à aquisição
 * em formato de elemento HTML
 * @returns document object
 */
export const bannerMsg = (msg) => `
<h1 style="color:orange;text-align:center">
${msg}
</h1>`;
