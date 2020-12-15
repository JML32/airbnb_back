const express = require('express');
const app = express();
const port = 4567;



var placements = require("./routes/placementsRoutes.js");
app.use("/placements", placements);


app.listen(port, () => {
  console.log(`notre serveur tourne sur le port ${port}`);
})

