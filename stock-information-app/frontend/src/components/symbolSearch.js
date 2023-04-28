//Search bar for Stock Symbols:

//This code introduces a loading indicator, error handling, and better user experience by allowing users to select stock symbols from the search results. Make sure to apply some CSS styles for the new elements like .error and .search-result. 

//This code goes inside components/symbolSearch.js file:

import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import '../styles/Globalstyles.css';

const ALPHA_VANTAGE_API_KEY = "5JB6VTZK12BKB1D7";

function SymbolSearch() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [searchTimeout, setSearchTimeout] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const inputRef = useRef();

  useEffect(() => {
    return () => {
      if (searchTimeout) {
        clearTimeout(searchTimeout)
      }
    }
  }, [searchTimeout])

  const handleInputChange = (event) => {
    const query = event.target.value
    setSearchTerm(query)

    if (searchTimeout) {
      clearTimeout(searchTimeout)
    }

    if (query.length > 0) {
      setSearchTimeout(
        setTimeout(() => {
          searchSymbols(query)
        }, 300)
      )
    } else {
      setSearchResults([])
    }
  };

  //This searchSymbol function will perform an API call to Alpha Vantage to search for stock symbols based on the input query, handle loading states, and manage errors.

  const searchSymbols = async (query) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.get(
        `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${query}&apikey=${ALPHA_VANTAGE_API_KEY}`
      )

      if (response.data.Note) {
        setError("API rate limit exceeded. Please try again later.");
      } else if (response.data.bestMatches) {
        setSearchResults(response.data.bestMatches);
      } else {
        setError("No results found.");
      }
    } catch (error) {
      setError("An error occurred while fetching data. Please try again later.");
    };

    setIsLoading(false)
  };

  const handleResultClick = (result) => {
    console.log(`Selected stock symbol: ${result.symbol}`)
    setSearchTerm(result.symbol);
    setSearchResults([]);
  };

  return (
    <div className="SymbolSearch">
      <div className="field">
        <input
          className="input"
          type="text"
          ref={inputRef}
          placeholder="Search stock symbol"
          value={searchTerm}
          onChange={handleInputChange}
        />
      </div>
      {isLoading && (
        <progress className="progress is-small is-primary" max="100">
          Loading
        </progress>
      )}
      {error && <div className="notification is-danger">{error}</div>}
      <div className="list">
        {searchResults.map((result) => (
          <a
            className="list-item"
            key={result.symbol}
            onClick={() => handleResultClick(result)}
          >
            {result.symbol} - {result.name}
          </a>
        ))}
      </div>
    </div>
  )
};

export default SymbolSearch;


//add this code inside the index.html  
//The main HTML file that includes a container for your REACT application.

// ;;`<!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <meta name="viewport" content="width=device-width, initial-scale=1.0">
//   <title>Stock Symbol Search</title>
//   <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css">
// </head>
// <body>
//   <div id="root"></div>
//   <script src="./index.js"></script>
// </body>
// // </html>
// `//add this code inside a css file.

// // `.SymbolSearch {
//   width: 100%;
//   max-width: 600px;
//   margin: 0 auto;
//   padding: 20px;
//   box-sizing: border-box;
//   font-family: "Roboto", "Helvetica", "Arial", sans-serif;
// }`

//add this code to the index.js file.

// `import SymbolSearch from './components/symbolSearch';
// `









