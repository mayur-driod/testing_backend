const express = require('express');
const app = express();
const port = process.env.port || 8080;

app.get('/', (req, res) => {
  res.send('Hey whatsupp!');
});

app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});