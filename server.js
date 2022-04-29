import http from "http";
import app from "./src/app.js";
import { attention } from "./src/utils/LogHelper.js";
const port = process.env.PORT || 3000;
const server = http.createServer(app);

server.listen(port, () =>
  console.log(attention(`app funcionando em http://localhost:${port}`))
);

//teste