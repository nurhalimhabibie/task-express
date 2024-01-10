const router = require("express").Router();
const path = require("path");

router.get("/", (req, res) => {
  // res.json({
  //   status: "Succesfull",
  //   message: "Welcome to Express JS",
  // });
  // res.sendFile("./views/index.html", { root: __dirname });
  res.sendFile(path.join(__dirname + "/views/index.html"));
});

router.get("/about", (req, res) => {
  res.json({
    message: "Ini adalah halaman About",
  });
  // res.sendFile("./views/about.html", { root: __dirname });
});

router.get("/contact", (req, res) => {
  res.json({
    nama: "Nurhalim Habibie",
    email: "halimnur391@gmail.com",
    noHP: "0812334567",
  });
});

module.exports = router;
