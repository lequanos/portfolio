require('dotenv').config();
const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('dist'));
app.use('*', (req, res) => {
  res.sendFile(`${path.dirname(__dirname)}/dist/index.html`);
});

app.listen(process.env.PORT || 3000, () => {
  console.log('Server running on :', process.env.PORT);
});
