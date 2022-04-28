import Validator from "fastest-validator";

const v = new Validator();

const schema = {
  nome: {
    type: "string",
    min: 3,
    optional: false,
    messages: {
      string: "Verifique se o nome é do tipo string",
      stringMin: "Nome não pode conter menos do que 3 letras",
      optional: "nome não pode ser nulo",
    },
  },
  sabor: {
    type: "string",
    min: 3,
    optional: false,

    messages: {
      string: "verifique se o sabor é do tipo string",
      stringMin: "Propriedade sabor não pode ter menos que 3 letras",
      optional: "sabor não pode ser nulo",
    },
  },
  embalagem: {
    type: "string",
    min: 3,
    optional: false,

    messages: {
      string: "Verifique se embalagem é do tipo string",
      stringMin: "Propriedade embalagem não pode ter menos que 3 letras",
      optional: "embalagem não pode ser nulo",
    },
  },
  ml: {
    type: "number",
    optional: false,

    messages: {
      number: "Verifique se o valor é do tipo number",
      optional: "ml não pode ser nulo",
    },
  },
  preco: {
    type: "number",
    optional: false,

    messages: {
      number: "Verifique se o valor é do tipo number",
      optional: "preco não pode ser nulo",
    },
  },
};

export const valida = v.compile(schema);
