var express = require("express");
var router = express.Router();

// Page principale
router.get("/", function (req, res) {
  res.send("Page principale des Placements financiers");
});

// route pour création placement
router.post("/creation", function (req, res) {
  res.send("Création d'un nouveau placement financier");
});

// route pour modification d'un placement
router.put("/modification/id", function (req, res) {
  res.send("modification d'un placement financier");
});

// route pour suppression d'un placement
router.delete("/suppression/id", function (req, res) {
  res.send("suppression d'un placement financier");
});


module.exports = router;
