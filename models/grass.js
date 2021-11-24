const mongoose = require("mongoose");

const grassModel = new mongoose.Schema({
  nome: { type: String, required: true },
  peso: { type: Number, required: true },
  altura: { type: Number, required: true },
  imagemUrl: { type: String, required: true },
  regiao: { type: String, required: true },
  dataCriacao: { type: Date, default: Date.now },
});

const grassM = mongoose.model("grass", grassModel); //alterar const e parametros do mongoose.model para ficar de acordo com o projeto

module.exports = grassM;
