import app from "./app.js";

const port = process.env.PORT || 3000;
app.listen(port, () =>
  console.log(`HTTP server listening on http://localhost:${port}`)
);
