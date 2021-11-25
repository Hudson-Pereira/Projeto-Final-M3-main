const express = require("express");
const router = express.Router();
const { body, checkSchema } = require("express-validator");
const AguaController = require("../controller/agua.controller");
//===========   tentar reduzir linhas iguais com funcoes =================
router.get("/", (req, res) => {
  res.status(200).json({ message: "Rota do tipo AGUA!!!" });
});

router.get("/listall", AguaController.listAll);

router.get(
  "/listid/:id",
  [
    checkSchema({
      id: {
        isLength: {
          errorMessage:
            "Id com quatidade diferente de 24 caracteres, verifique o número e tente novamente.",
          options: { min: 24, max: 24 },
        },
        // in: ["params", "query"],
        // errorMessage: "ID is wrong",
        // isInt: true,
        // toInt: true,
      },
    }),
  ],
  AguaController.listId
);

router.post(
  "/add",
  [
    body("nome").notEmpty().withMessage("nome vazio"),
    body("peso")
      .notEmpty()
      .withMessage("peso vazio")
      .isNumeric()
      .withMessage("peso nao numerico"),
    body("altura")
      .notEmpty()
      .withMessage("altura vazio")
      .isNumeric()
      .withMessage("altura nao numerico"),
    body("imagemUrl")
      .notEmpty()
      .withMessage("imagem vazia")
      .isURL({ protocols: ["https"] })
      .withMessage("Insira a url da imagem."),
    body("regiao").notEmpty().withMessage("regiao vazia"),
  ],
  AguaController.postAdd
);

router.put(
  "/update/:id",
  [
    checkSchema({
      id: {
        isLength: {
          errorMessage:
            "Id com quatidade diferente de 24 caracteres, verifique o número e tente novamente.",
          options: { min: 24, max: 24 },
        },
        // in: ["params", "query"],
        // errorMessage: "ID is wrong",
        // isInt: true,
        // toInt: true,
      },
    }),
    body("nome").notEmpty().withMessage("nome-vazio"),
    body("peso")
      .notEmpty()
      .withMessage("peso vazio")
      .isNumeric()
      .withMessage("peso nao numerico"),
    body("altura")
      .notEmpty()
      .withMessage("altura vazio")
      .isNumeric()
      .withMessage("altura nao numerico"),
    body("imagemUrl")
      .notEmpty()
      .withMessage("imagem vazia")
      .isURL({ protocols: ["https"] })
      .withMessage("insira a url da imagem"),
    body("regiao").notEmpty().withMessage("regiao vazia"),
  ],
  AguaController.putUpdate
);

router.delete(
  "/delete/:id",
  [
    checkSchema({
      id: {
        isLength: {
          errorMessage:
            "Id com quatidade diferente de 24 caracteres, verifique o número e tente novamente.",
          options: { min: 24, max: 24 },
        },
        // in: ["params", "query"],
        // errorMessage: "ID is wrong",
        // isInt: true,
        // toInt: true,
      },
    }),
  ],
  AguaController.delDelete
);

module.exports = router;
