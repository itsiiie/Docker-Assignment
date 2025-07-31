const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");
const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/submit", async (req, res) => {
  try {
    const response = await axios.post("http://backend:5000/submit", req.body);
    res.send(response.data);
  } catch (error) {
    res.status(500).send("Error communicating with backend");
  }
});

app.listen(port, () => {
  console.log(`Frontend server running at http://localhost:${port}`);
});
