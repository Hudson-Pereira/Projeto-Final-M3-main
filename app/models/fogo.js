const mongoose = require("mongoose");

const fogoModel = new mongoose.Schema({
  nome: { type: String, required: true },
  peso: { type: Number, required: true },
  altura: { type: Number, required: true },
  imagemUrl: { type: String, required: true },
  regiao: { type: String, required: true },
  dataCriacao: { type: Date, default: Date.now },
});

const modFogo = mongoose.model("fogo", fogoModel);

module.exports = modFogo;
