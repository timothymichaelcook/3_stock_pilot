import React from "react";
import { Route, Routes } from "react-router-dom";
import AboutUs from "./components/AboutUs";
import CrawlLine from "./components/CrawlLine";
import Footer from "./components/Footer";
import Home from "./components/Home";
import IndyStock from "./components/IndyStock";
import InfoScroller from "./components/InfoScroller";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Navbar from "./components/Navbar";
import UserPortfolio from "./components/UserPortfolio";
import UserProfile from "./components/UserProfile";
// import StockSearch from "./components/StockSearch";
import SymbolSearch from "./components/symbolSearch";

import "bulma/css/bulma.min.css";

// import { ALPHA_VANTAGE_API_KEY } from "./symbolSearch.js";


function App() {
  return (
    <div className="App">
      <div className="d-flex flex-column min-vh-100">
        <header>
          <Navbar />
          <CrawlLine />
        </header>
        <main className="container flex-grow-1">
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
           
            <Route path="/stock" element={<IndyStock />} />
            <Route path="/info" element={<InfoScroller />} />
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/portfolio" element={<UserPortfolio />} />
            <Route path="/profile" element={<UserProfile />} />
            <Route path="/search" element={<SymbolSearch />} />
          </Routes>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </div>
  );
}

export default App;

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