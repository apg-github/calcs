const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(`${__dirname}/calc/bmi.html`);
});

app.post("/", (req, res) => {
  const weight = parseFloat(req.body.weight);
  const height = parseFloat(req.body.height);
  const bmi = weight / (height * height);
  res.send(`Your BMI is calculated as: ${bmi.toPrecision(4)}`);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
