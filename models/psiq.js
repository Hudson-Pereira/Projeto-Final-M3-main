const mongoose = require("mongoose");

const psiqModel = new mongoose.Schema({
  nome: { type: String, required: true },
  peso: { type: Number, required: true },
  altura: { type: Number, required: true },
  imagemUrl: { type: String, required: true },
  regiao: { type: String, required: true },
  dataCriacao: { type: Date, default: Date.now },
});

const modPsiq = mongoose.model("psiq", psiqModel);

module.exports = modPsiq;
