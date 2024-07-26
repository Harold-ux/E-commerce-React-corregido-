const { Router } = require("express");

const {
  getComentarios,
  saveComentario,
  updateComentario,
  deleteComentario,
} = require("../controllers/ComentarioControllers");

const router = Router();

router.get("/get", getComentarios);
router.post("/save", saveComentario);
router.put("/update/:id", updateComentario);
router.delete("/delete/:id", deleteComentario);

module.exports = router;
