//Search bar for Stock Symbols:

//This code introduces a loading indicator, error handling, and better user experience by allowing users to select stock symbols from the search results. Make sure to apply some CSS styles for the new elements like .error and .search-result. 

//This code goes inside components/symbolSearch.js file:

import React, { useState, useEffect, useRef } from "react"
import axios from "axios"
import "bulma/css/bulma.css"

// Replace this key with your own Alpha Vantage API key
const ALPHA_VANTAGE_API_KEY = "5JB6VTZK12BKB1D7"

function SymbolSearch() {
  const [searchTerm, setSearchTerm] = useState("")
  const [searchResults, setSearchResults] = useState([])
  const [searchTimeout, setSearchTimeout] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const inputRef = useRef()

  // Load the previously selected stock symbol from localStorage (if available)
  // and set up the timeout cleanup
  useEffect(() => {
    const savedSymbol = localStorage.getItem("selectedSymbol")
    if (savedSymbol) {
      handleResultClick(JSON.parse(savedSymbol))
    }

    return () => {
      if (searchTimeout) {
        clearTimeout(searchTimeout)
      }
    }
  }, [searchTimeout])

  // Handle input changes, setting the search term, and managing the search timeout
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
  }

  // Search for stock symbols using the Alpha Vantage API
  const searchSymbols = async (query) => {
    setIsLoading(true)
    setError(null)

    try {
      const response = await axios.get("https://www.alphavantage.co/query", {
        params: {
          function: "SYMBOL_SEARCH",
          keywords: query,
          apikey: ALPHA_VANTAGE_API_KEY,
        },
      })

      if (response.data.bestMatches) {
        setSearchResults(
          response.data.bestMatches.map((match) => ({
            symbol: match["1. symbol"],
            name: match["2. name"],
          }))
        )
      } else {
        setSearchResults([])
      }
    } catch (error) {
      console.error("Error fetching stock symbols:", error)
      setError("Error fetching stock symbols. Please try again later.")
      setSearchResults([])
    } finally {
      setIsLoading(false)
    }
  }

  // Handle click events on search results and save the selected symbol to localStorage
  const handleResultClick = (result) => {
    localStorage.setItem("selectedSymbol", JSON.stringify(result))
    // Perform any additional actions here when a result is clicked
  }

  return (
    <div className="App">
      <div className="field">
        <div className={`control ${isLoading ? "is-loading" : ""}`}>
          <input
            className="input"
            type="text"
            ref={inputRef}
            placeholder="Search stock symbol"
            value={searchTerm}
            onChange={handleInputChange}
          />
        </div>
      </div>
      {error && <div className="notification is-danger">{error}</div>}
      <div className="panel">
        {searchResults.map((result) => (
          <a
            className="panel-block"
            key={result.symbol}
            onClick={() => handleResultClick(result)}
          >
            {result.symbol} - {result.name}
          </a>
        ))}
      </div>
    </div>
  )
}

export default SymbolSearch;



//add this code inside the index.html  
//The main HTML file that includes a container for your REACT application.

//`<!DOCTYPE html>
//<html lang="en">

//<head>
 // <meta charset="UTF-8">
 // <meta name="viewport" content="width=device-width, initial-scale=1.0">
 // <title>Stock Symbol Search</title>
 // <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css">
 // <link rel="stylesheet" href="./styles.css">
//</head>
//<body>
 // <div id="root" class="search-container"></div>
 // <script src="./index.js"></script>
//</body>
//</html> `


//add this code inside a css file.

 // `body, html {
  //height: 100%;
//}
//.search-container {
//  display: flex;
 // justify-content: center;
  //align-items: center;
 // height: 100%;
//}`


//add this code to the index.js file.

// `import React from "react"
//import ReactDOM from "react-dom"
//import App from "./App"

//ReactDOM.render(
 // <React.StrictMode>
   // <App />
 // </React.StrictMode>,
 // document.getElementById("root")
//)
// `

//add this into the App.js fiel
//import React from "react"
//import SymbolSearch from "./components/symbolSearch"
//import "./GlobalStyles.css"

//function App() {
  //return (
    //<div className="App">
      //<SymbolSearch />
    //</div>
  //)
//}

//export default App







