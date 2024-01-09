const express = require("express");
const app = express();
const router = require("./routes");

app.use(router);
app.use((req, res) => {
  res.status(404);
  res.send({
    status: "Failed",
    massage: "Resource " + req.originalUrl + " not Found",
  });
});

const port = process.env.PORT || 8080;

app.listen(port, (err, res) => {
  if (err) {
    console.log(err);
    return res.status(500).send(err.message);
  } else {
    console.log("[INFO] Server Running on port:", port);
  }
});
