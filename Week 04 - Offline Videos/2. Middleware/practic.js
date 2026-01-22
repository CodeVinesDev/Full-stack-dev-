import express from "express";
const app = express;

const checkValidatiom = (req, res, next) => {
  let req = req.path;
  console.log("date is now", new Date.now());
  console.log("method is this", req.method);
  //  call the next function
  next();
};

app.use(checkValidatiom);
