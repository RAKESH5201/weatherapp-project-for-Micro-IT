const express = require('express');
const cors = require('cors');
const axios = require('axios');
const app = express();
const PORT = 5001;

app.use(cors());

const apiKey = 'd3350c40d8160a5431fbfead8e680156';

app.get('/weather', async (req, res) => {
  const city = req.query.city;
  if (!city) {
    return res.status(400).json({ error: 'City is required' });
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await axios.get(url);
    res.json(response.data);
  } catch (error) {
    console.error(error.response.data);
    res.status(404).json({ error: 'City not found' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
