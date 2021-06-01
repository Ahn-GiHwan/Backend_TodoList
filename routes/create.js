import data from '../data'
import express from 'express';
const router = express.Router();

router.post('/insert', (req, res) => {
  const title = req.body.title
  const contents = req.body.contents
  const writer = req.body.writer

  const temp = { id: data.length, title, contents, writer }
  data.push(temp)
})

module.exports = router;