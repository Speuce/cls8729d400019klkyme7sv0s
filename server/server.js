const express = require('express');
const app = express();
const counter = require('./counter');

app.use(express.json());

app.get('/getCounter', (req, res) => {
  const count = counter.getCounter();
  res.json(count);
});

app.post('/incrementCounter', (req, res) => {
  counter.incrementCounter();
  const count = counter.getCounter();
  res.json(count);
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});