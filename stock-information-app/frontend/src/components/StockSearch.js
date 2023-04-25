import React from 'react';
import '../styles/Globalstyles.css';

function StockSearch() {
  return (
    <div className="field is-grouped">
      <div className="field">
        <label className="label">Search</label>
        <div className="control has-icons-left">
          <input className="input" type="text" placeholder="Symbol or Company" />
          <span className="icon is-left">
            <i className="fas fa-search"></i>
          </span>
        </div>
      </div>

      <div className="field is-grouped">
        <div className="control">
          <button id="tickerSearch" className="button is-link">Search</button>
        </div>
      </div>
    </div>
  );
}

export default StockSearch;