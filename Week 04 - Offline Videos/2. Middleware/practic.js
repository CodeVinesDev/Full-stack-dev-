import express from "express";
const app = express;

const checkValidatiom = (req, res, next) => {
  let req = req.path;
  console.log("date is", new Date.now());
  console.log("method is", req.method);
  next();
};

app.use(checkValidatiom);
