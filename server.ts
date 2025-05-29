import express from "express";

export default function startServer(): void {
  const app = express();
  const PORT = 3000;

  app.get("/api/hello", (_, res) => {
    res.send("Hello World from Express!");
  });

  app.listen(PORT, () => {
    console.log(`Express server running at http://localhost:${PORT}`);
  });
}
