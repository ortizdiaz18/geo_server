const express = require("express");
const router = express.Router();

const {
  validarCobertura,
  sendTemplateSinCobertura,
  sendTemplateCoberturaOk,
} = require("../controllers/cobertura");

router.get("/", validarCobertura);
router.get("/asignarAgente", sendTemplateSinCobertura);
router.get("/coberturaOk", sendTemplateCoberturaOk);

module.exports = router;
