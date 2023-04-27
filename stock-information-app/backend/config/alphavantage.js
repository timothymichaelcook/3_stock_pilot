const fetch = require('node-fetch');

const apiKey = '5JB6VTZK12BKB1D7'; 

async function getStockQuote(ticker) {
  const url = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${ticker}&interval=5min&apikey=${apiKey}`;
  const response = await fetch(url);
  const price = await response.json();
  return price;
}

async function getCompanyOverview(ticker) {
  const url = `https://www.alphavantage.co/query?function=OVERVIEW&symbol=${ticker}&apikey=${apiKey}`;
  const response = await fetch(url);
  const overview = await response.json();
  return overview;
}

module.exports = {
  getStockQuote,
  getCompanyOverview
};
