const express = require("express");
const path = require("path");
const db = require("./db/db.json");
const fs = require("fs");
const routes = require("./routes");
const PORT = process.env.port || 3001;

const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));
app.use(routes);

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);