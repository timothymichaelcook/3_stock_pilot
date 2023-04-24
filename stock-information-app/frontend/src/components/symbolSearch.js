//Search bar for Stock Symbols:

//This code introduces a loading indicator, error handling, and better user experience by allowing users to select stock symbols from the search results. Make sure to apply some CSS styles for the new elements like .error and .search-result. 

//This code goes inside components/App.js File.

import React, { useState, useRef } from "react"
import axios from "axios"
import {
  TextField,
  CircularProgress,
  List,
  ListItem,
  ListItemText,
  Alert,
} from "@mui/material"
import "./App.css"

const ALPHA_VANTAGE_API_KEY = "YOUR_API_KEY" // Replace with your API key

function App() {
  const [searchTerm, setSearchTerm] = useState("")
  const [searchResults, setSearchResults] = useState([])
  const [searchTimeout, setSearchTimeout] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const inputRef = useRef()

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

  const handleResultClick = (result) => {
    setSearchTerm(result.symbol)
    setSearchResults([])
    inputRef.current.focus()
  }

  return (
    <div className="App">
      <TextField
        inputRef={inputRef}
        fullWidth
        label="Search stock symbol"
        value={searchTerm}
        onChange={handleInputChange}
      />
      {isLoading && <CircularProgress />}
      {error && <Alert severity="error">{error}</Alert>}
      <List>
        {searchResults.map((result) => (
          <ListItem
            button
            key={result.symbol}
            onClick={() => handleResultClick(result)}
          >
            <ListItemText primary={`${result.symbol} - ${result.name}`} />
          </ListItem>
        ))}
      </List>
    </div>
  )
}

export default App;


//add this code inside the index.html  
//The main HTML file that includes a container for your REACT application.
;;`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Stock Symbol Search</title>
</head>
<body>
  <div id="root"></div>
  <script src="./index.js"></script>
</body>
</html>
`

//add this code inside the App.css file. 

`.App {
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
}
` 

//add this code to the index.js file.
`import App from './components/App';`









