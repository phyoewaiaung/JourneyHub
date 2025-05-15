const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Welcome to the API check',
    app: 'Node.js API',
  });
});

const port = 4000;
app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});
