import express from 'express';
const app = express();
const port = 3000

app.use('/', require('./routes/read'))

app.listen(port, () => {
  console.log(`Express server start localhost:${port}`)
})