const { validationResult } = require("express-validator");
const Fogo = require("../models/fogo");

exports.listAll = async (req, res) => {
  await Fogo.find({})
    .then((fogos) => {
      if (fogos.length === 0) {
        res.status(404).json({ message: "Nada encontrado." });
        return;
      }
      res.status(200).json({ fogos });
    })
    .catch((err) => {
      res.status(400).json({ message: "ERROR!!!" });
      console.error(err);
    });
};

exports.listId = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  await Fogo.findById(req.params.id)
    .then((fogo) => {
      if (!fogo) {
        res.status(404).json({ message: "Nada encontrado." });
        return;
      }
      res.status(200).json(fogo);
    })
    .catch((err) => {
      res.status(400).json({ message: "ERROR!!!" });
      console.error(err);
    });
};

exports.postAdd = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  await Fogo.create(req.body)
    .then(() => {
      res.status(201).json({
        message: `Pokemon ${req.body.nome} cadastrado com sucesso.`,
      });
    })
    .catch((err) => {
      res.status(400).json({ message: "ERROR!!!" });
      console.error(err);
    });
};

exports.putUpdate = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  await Fogo.findByIdAndUpdate(req.params.id, req.body)
    .then((fogo) => {
      if (!fogo) {
        res.status(404).json({ message: "Nada encontrado." });
        return;
      }
      res
        .status(200)
        .json({ message: `Pokemon ${req.body.nome} alterado com sucesso.` });
    })
    .catch((err) => {
      res.status(400).json({ message: "ERROR!!!" });
      console.error(err);
    });
};

exports.delDelete = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  await Fogo.findByIdAndDelete({ _id: req.params.id })
    .then(() => {
      res.status(200).json({ message: "Item excluido com sucesso." });
    })
    .catch((err) => {
      res.status(400).json({ message: "ERROR!!!" });
      console.error(err);
    });
};
