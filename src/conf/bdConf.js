import { bd } from "../services/sqlite-db.js";

//Escutador
process.on("SIGINT", () =>
  bd.close(() => {
    console.log("BD encerrado!");
    process.exit(0);
  })
);
