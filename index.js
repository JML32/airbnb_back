const express = require('express');
const app = express();
const port = 4567;

app.get('/', (req, res) =>{
  res.send('Bienvenue !')
})

app.listen(port, () => {
  console.log(`notre serveur tourne sur le port ${port}`);
})