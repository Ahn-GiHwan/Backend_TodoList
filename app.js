// import express from 'express';
const express = require("express");

const app = express();

app.use("/", require("./routes/read"));

const port = 3000;
app.listen(port, () => {
  console.log(`Express server start localhost:${port}`);
});
