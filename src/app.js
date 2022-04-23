import express from "express";
import { moduloBebidas} from "./controller/BebidasController.js";
import { bannerErro, bannerMsg } from "./view/banner.js";
const app = express();

app.use(express.json());
app.use(moduloBebidas);


app.get("/", (req, res) => {
  res.send(bannerMsg("Porta Principal Funcionando"));
});

export default app;