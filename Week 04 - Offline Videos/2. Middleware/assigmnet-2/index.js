import express from "express";
import fs from "fs";
import path from "path";
const app = express();
import { dirname } from "path";

const pathname = path.resolve("./files", __dirname);
console.log(pathname);

app.get("/files", (req, res) => {
  try {
    fs.readFile("", "utf8", (err, data) => {
      if (err) {
        console.error("Error reading file:", err);
        return;
      }
      console.log("File content:", data);
    });
  } catch (error) {}
  return res.json({ msg: "server started" });
});

app.listen(3000, (req, res) => {
  console.log("server started 3000");
});
