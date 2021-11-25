const Ghost = require("../models/ghost");

exports.postAdd = async (req, res) => {
  if (!req.body.nome) {
    res.status(400).json({ message: "The Nome field cannot be sent empty." });
    return;
  }
  if (!req.body.peso) {
    res.status(400).json({ message: "The Peso field cannot be sent empty." });
    return;
  }
  if (!req.body.altura) {
    res.status(400).json({ message: "The Altura field cannot be sent empty." });
    return;
  }
  if (!req.body.imagemUrl) {
    res
      .status(400)
      .json({ message: "The imagemUrl field cannot be sent empty." });
    return;
  }
  if (!req.body.regiao) {
    res.status(400).json({ message: "The regiao field cannot be sent empty." });
    return;
  }
  await Ghost.create(req.body)
    .then(() => {
      res.status(400).json({ message: "Successfully registered Pokémon!" });
    })
    .catch((err) => {
      res.status(400).json({ message: "Error when registering" });
      console.error(err);
    });
};

exports.putUpdate = async (req, res) => {
  if (req.params.id.length != 24) {
    res.status(400).json({ message: "Id must be 24 characters long" });
    return true;
  }
  if (!req.body.nome) {
    res.status(400).json({ message: "The Nome field cannot be sent empty." });
    return;
  }
  if (!req.body.peso) {
    res.status(400).json({ message: "The Peso field cannot be sent empty." });
    return;
  }
  if (!req.body.altura) {
    res.status(400).json({ message: "The Altura field cannot be sent empty." });
    return;
  }
  if (!req.body.imagemUrl) {
    res
      .status(400)
      .json({ message: "The imagemUrl field cannot be sent empty." });
    return;
  }
  if (!req.body.regiao) {
    res.status(400).json({ message: "The regiao field cannot be sent empty." });
    return;
  }
  await Ghost.findByIdAndUpdate(req.params.id, req.body)
    .then(() => {
      res.status(200).json({ message: "Pokemon successfully updated!" });
    })
    .catch((err) => {
      res.status(400).json({ message: "Error when registering" });
      console.error(err);
    });
};

exports.getListall = async (req, res) => {
  await Ghost.find({})
    .then((ghost) => {
      res.status(200).json(ghost);
    })
    .catch((err) => {
      res.status(404).json({ message: "Not found pokemon Ghost" });
      console.error(err);
    });
};

exports.getListid = async (req, res) => {
  if (req.params.id.length != 24) {
    res.status(400).json({ message: "Id must be 24 characters long" });
    return true;
  }
  await Ghost.findById(req.params.id)
    .then((ghost) => {
      res.status(200).json(ghost);
    })
    .catch((err) => {
      res.status(404).json({ message: "Not found pokemon Ghost" });
      console.error(err);
    });
};

exports.deleteDelete = async (req, res) => {
  if (req.params.id.length != 24) {
    res.status(400).json({ message: "Id must be 24 characters long" });
    return true;
  }
  await Ghost.findByIdAndDelete(req.params.id)
    .then(() => {
      res.status(200).json({ message: "Successfully deleted Pokémon!" });
    })
    .catch((err) => {
      res.status(404).json({ message: "Not found pokemon Ghost" });
      console.error(err);
    });
};
