const express = require("express");
const router = express.Router();
const RotaController = require("../controller/ghost.controller");

router.get("/", (req, res) => {
  res.status(200).json({ message: "Rota do tipo GHOST!!!" });
});

router.post("/add", RotaController.postAdd);

router.put("/update/:id", RotaController.putUpdate);

router.get("/listall", RotaController.getListall);

router.get("/listid/:id", RotaController.getListid);

router.delete("/delete/:id", RotaController.deleteDelete);

module.exports = router;
