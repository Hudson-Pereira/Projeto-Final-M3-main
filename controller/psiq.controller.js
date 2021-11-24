const { validationResult } = require("express-validator");
const Psiq = require("./../models/psiq.js");

exports.listAll = async (req, res) => {
  await Psiq.find({})
    .then((psiqs) => {
      if (psiqs.length === 0) {
        res.status(404).json({ message: "Nada encontrado." });
        return;
      }
      res.status(200).json({ psiqs });
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
  await Psiq.findById(req.params.id)
    .then((psiq) => {
      if (!psiq) {
        res.status(404).json({ message: "Nada encontrado." });
        return;
      }
      res.status(200).json(psiq);
    })
    .catch((err) => {
      res.status(400).json({ message: "ERROR!!!" });
      console.error(err);
    });
};

exports.add = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  await Psiq.create(req.body)
    .then(() => {
      res
        .status(201)
        .json({ message: `Pokemon ${req.body.name} cadastrado com sucesso.` });
    })
    .catch((err) => {
      res.status(400).json({ message: "ERROR!!!" });
      console.error(err);
    });
};

exports.update = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  await Psiq.findByIdAndUpdate(req.params.id, req.body)
    .then((psiq) => {
      if (!psiq) {
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

exports.delete = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  await Psiq.findByIdAndDelete({ _id: req.params.id })
    .then(() => {
      res.status(200).json({ message: "Item excluido com sucesso." });
    })
    .catch((err) => {
      res.status(400).json({ message: "ERROR!!!" });
      console.error(err);
    });
};
