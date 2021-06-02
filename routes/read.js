import data from '../data'
import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
  res.send({ data })
})

router.get('/view/:id', (req, res) => {
  const id = req.params.id;
  res.send(data[id]);
})

module.exports = router;