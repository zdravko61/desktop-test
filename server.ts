const express = require("express");

function ss() {
  const app = express();
  const PORT = 3000;

  app.get("/api/hello", (_, res) => {
    res.send("Hello World from Express! hello 1.0.4");
  });

  app.listen(PORT, () => {
    console.log(`Express server running at http://localhost:${PORT}`);
  });
}

module.exports = ss;
