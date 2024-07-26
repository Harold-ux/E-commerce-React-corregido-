const mongoose = require("mongoose");

const comentarioSchema = new mongoose.Schema({
  comentario: {
    type: String,
    required: true,
  },
},{ versionKey: false });

module.exports = mongoose.model("Comentario", comentarioSchema);
