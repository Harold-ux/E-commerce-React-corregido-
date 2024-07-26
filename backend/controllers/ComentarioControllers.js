const ComentarioModel = require("../models/ComentarioModel");

module.exports.getComentarios = async (req, res) => {
  const comentarios = await ComentarioModel.find();
  res.send(comentarios);
};

module.exports.saveComentario = (req, res) => {
  const { comentario } = req.body;

  ComentarioModel.create({ comentario })
    .then((data) => {
      console.log("Comentario guardado exitosamente...");
      res.status(201).send(data);
    })
    .catch((error) => {
      console.log(error);
      res.send({ error: error, msg: "Algo salió mal!!" });
    });
};

module.exports.updateComentario = (req, res) => {
  const { id } = req.params;
  const { comentario } = req.body;

  ComentarioModel.findByIdAndUpdate(id, { comentario })
    .then(() => res.send("Comentario actualizado exitosamente"))
    .catch((error) => {
      console.log(error);
      res.send({ error: error, msg: "Algo salió mal!!" });
    });
};

module.exports.deleteComentario = (req, res) => {
  const { id } = req.params;

  ComentarioModel.findByIdAndDelete(id)
    .then(() => res.send("Comentario borrado exitosamente"))
    .catch((error) => {
      console.log(error);
      res.send({ error: error, msg: "Algo salió mal!!" });
    });
};
