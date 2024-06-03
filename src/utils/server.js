const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();
const port = 4999;

app.use(cors());

app.use(express.json());

app.post('/proxy/graphql', async (req, res) => {
  try {
    const response = await axios.post('https://api.newrelic.com/graphql', req.body, {
      headers: {
        'Content-Type': 'application/json',
        'Api-Key': 'Api-Key'
      }
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
