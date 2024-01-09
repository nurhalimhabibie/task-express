const router = require("express").Router();
const path = require("path");

router.get("/", (req, res) => {
  res.sendFile("./views/index.html", { root: __dirname });
});

router.get("/about", (req, res) => {
  res.sendFile("./views/about.html", { root: __dirname });
});

router.get("/contact", (req, res) => {
  res.json({
    nama: "Nurhalim Habibie",
    email: "halimnur391@gmail.com",
    noHP: "0812334567",
  });
});

module.exports = router;
