const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");

app.use(express.json());

const Conn = require("./models/Conn/index");

Conn();

app.use(cors());
app.options("*", cors());

app.get("/", (req, res) => {
  res.status(200).json({ message: "API Pokemon em funcionamento!" });
});

const GrassRouter = require("./routers/grass.routes");
app.use("/grass", GrassRouter);

const GhostRouter = require("./routers/ghost.routes");
app.use("/ghost", GhostRouter);

const aguaRouters = require("./routers/agua.routes");
app.use("/agua", aguaRouters);

const psiqRouters = require("./routers/psiq.routes");
app.use("/psiquico", psiqRouters);

const fogoRouters = require("./routers/fogo.routes");
app.use("/fogo", fogoRouters);

app.listen(process.env.PORT, () => {
  console.log(`Servidor em http://localhost:${process.env.PORT}`);
});
