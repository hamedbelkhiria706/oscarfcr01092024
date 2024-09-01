import express from "express";

import bodyParser from "body-parser";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const validName = (req, res, next) => {
  const { name } = req.body;

  if (!name || !/^[a-zA-Z\s]+$/.test(name)) {
    return res.render("index", {
      error:
        "Please enter a valid name (only alphabetic characters and spaces).",
    });
  }

  next();
};

app.get("/", (req, res) => {
  res.render("index", { error: "" });
});

app.post("/name", validName, (req, res) => {
  const { name } = req.body;
  res.render("user", { name: name });
});
app.listen(5500);
