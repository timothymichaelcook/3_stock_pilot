const express = require('express');
const stockApi = require('./config/alphavantage');


const app = express();

app.get('/stock/price/:symbol', async (req, res) => {
  const { symbol } = req.params;
  const data = await stockApi.getStockQuote(symbol);
  res.json(data);
});

app.get('/stock/overview/:symbol', async (req, res) => {
  const { symbol } = req.params;
  const data = await stockApi.getCompanyOverview(symbol);
  res.json(data);
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
