const mongoose = require("mongoose");

const ghostModel = new mongoose.Schema({
  nome: { type: String, required: true },
  peso: { type: Number, required: true },
  altura: { type: Number, required: true },
  imagemUrl: { type: String, required: true },
  regiao: { type: String, required: true },
  dataCriacao: { type: Date, default: Date.now },
});

const ghostM = mongoose.model("ghost", ghostModel);
module.exports = ghostM;
