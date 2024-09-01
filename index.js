import express from "express";

import express from "express";
import bodyParser from "body-parser";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "public"));

app.get("/", (req, res, next) => res.render("index"));

app.post(
  "/user",
  (req, res, next) => res.render("user", { name: req.body["name"] })
  //compte rendu la semaine prochaine
);
