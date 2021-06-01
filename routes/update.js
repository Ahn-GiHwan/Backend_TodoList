import data from '../data'
import express from 'express';
const router = express.Router();

router.post('/update', (req, res) => {
  const id = req.body.id
  const title = req.body.title
  const contents = req.body.contents
  const writer = req.body.writer

  id = parseInt(id)
  data[id].title = title
})

module.exports = router;