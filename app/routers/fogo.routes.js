const express = require("express");
const router = express.Router();
const { body, checkSchema } = require("express-validator");
const FogoController = require("../controller/fogo.controller");

router.get("/", (req, res) => {
  res.status(200).json({ message: "Rota do tipo FOGO!!!" });
});

router.get("/listall", FogoController.listAll);

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
      },
    }),
  ],
  FogoController.listId
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
  FogoController.postAdd
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
      },
    }),
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
  FogoController.putUpdate
);

router.delete(
  "/delete/:id",
  [
    checkSchema({
      id: {
        isLength: {
          errorMessage:
            "Id com quantidade diferente de 24 caraceters, verifique o numero e tente novamente.",
          options: { min: 24, max: 24 },
        },
      },
    }),
  ],
  FogoController.delDelete
);

module.exports = router;
