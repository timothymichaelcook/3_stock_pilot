//This code goes in the Favorites.js file: includes local storage.

import React, { useState, useEffect } from 'react';
import { Button, List, ListItem, ListItemText, ListItemSecondaryAction, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

function Favorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = localStorage.getItem('favorites');
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, []);

  const updateLocalStorage = (updatedFavorites) => {
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  const handleAddFavorite = (symbol) => {
    if (!favorites.includes(symbol)) {
      const updatedFavorites = [...favorites, symbol];
      setFavorites(updatedFavorites);
      updateLocalStorage(updatedFavorites);
    }
  };

  const handleRemoveFavorite = (symbol) => {
    const updatedFavorites = favorites.filter((favorite) => favorite !== symbol);
    setFavorites(updatedFavorites);
    updateLocalStorage(updatedFavorites);
  };

  return (
    <div>
      <h2>Favorites</h2>
      <List>
        {favorites.map((symbol) => (
          <ListItem key={symbol}>
            <ListItemText primary={symbol} />
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="delete" onClick={() => handleRemoveFavorite(symbol)}>
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    </div>
  );
}

export default Favorites;



//This code goes in the App.js file: ?

`import React, { useState, useRef } from 'react';
import axios from 'axios';
import { TextField, CircularProgress, List, ListItem, ListItemText, Alert } from '@mui/material';
import Favorites from './components/Favorites';
import './App.css';

// ... rest of the App component code ...

  const handleResultClick = (result) => {
    setSearchTerm(result.symbol);
    setSearchResults([]);
    inputRef.current.focus();
    favoritesRef.current.handleAddFavorite(result.symbol);
  };

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
          <ListItem button key={result.symbol} onClick={() => handleResultClick(result)}>
            <ListItemText primary={`${result.symbol} - ${result.name}`} />
          </ListItem>
        ))}
      </List>
      <Favorites ref={favoritesRef} />
    </div>
  );
}

export default App;
`





