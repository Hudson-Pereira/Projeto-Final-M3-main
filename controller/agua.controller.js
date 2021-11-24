const { validationResult } = require("express-validator");
const Agua = require("./../models/agua");

exports.listAll = async (req, res) => {
  await Agua.find({})
    .then((aguas) => {
      if (aguas.length === 0) {
        res.status(404).json({ message: "Nada encontrado." });
        return;
      }
      res.status(200).json(aguas); //fazer em todos
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
  await Agua.findById(req.params.id)
    .then((agua) => {
      if (!agua) {
        res.status(404).json({ message: "Nada encontrado." });
        return;
      }
      res.status(200).json(agua);
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
  await Agua.create(req.body)
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
  await Agua.findByIdAndUpdate(req.params.id, req.body)
    .then((agua) => {
      if (!agua) {
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
  await Agua.findByIdAndDelete({ _id: req.params.id })
    .then(() => {
      res.status(200).json({ message: "Item excluido com sucesso." });
    })
    .catch((err) => {
      res.status(400).json({ message: "ERROR!!!" });
      console.error(err);
    });
};
