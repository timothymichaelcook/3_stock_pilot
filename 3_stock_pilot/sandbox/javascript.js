function getIntraDayQuotes() {
  let tickerCall = "IBM";
  let apiKey = "5JB6VTZK12BKB1D7";
  let url = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${tickerCall}&interval=5min&apikey=${apiKey}`;
  
  fetch(url)
    .then(response => response.json())
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.error(error);
    });
}

getIntraDayQuotes();


function getNews() {
  let sector = "economy_macro"
  let apiKey = "5JB6VTZK12BKB1D7";
  let url = `https://www.alphavantage.co/query?function=NEWS_SENTIMENT&topics=${sector}&apikey=${apiKey}`;
  
  fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log(data);
    })
    .catch(error => {
    console.error(error);
  });
}

getNews();


/* we could also do it with getNews(sector){} 


and then run the function as getNews(economy_macro) skipping the <let sector = ...>=

here are all of the sector topics:

Blockchain: blockchain
Earnings: earnings
IPO: ipo
Mergers & Acquisitions: mergers_and_acquisitions
Financial Markets: financial_markets
Economy - Fiscal Policy (e.g., tax reform, government spending): economy_fiscal
Economy - Monetary Policy (e.g., interest rates, inflation): economy_monetary
Economy - Macro/Overall: economy_macro
Energy & Transportation: energy_transportation
Finance: finance
Life Sciences: life_sciences
Manufacturing: manufacturing
Real Estate & Construction: real_estate
Retail & Wholesale: retail_wholesale
Technology: technology

https://www.alphavantage.co/documentation/#intraday - SCROLL THROUGH FOR DOCS FOR ALL APIs

*/



