import React, { useState, useEffect } from 'react';
import '../styles/Globalstyles.css';

const CompanyInfoTable = ({tickerSymbol}) => {
  const [companyInfo, setCompanyInfo] = useState({});

  useEffect(() => {
    const fetchCompanyInfo = async () => {
      // const response = await fetch(`https://www.alphavantage.co/query?function=OVERVIEW&symbol=${stockSymbol}&apikey=${apiKey}`);
      // const info = await response.json();
      const response = await fetch(`https://www.alphavantage.co/query?function=OVERVIEW&symbol=IBM&apikey=5JB6VTZK12BKB1D7`);
      const info = await response.json();

      setCompanyInfo(info);
    };
    fetchCompanyInfo();
  }, [tickerSymbol]);

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Exchange</th>
          <th>Sector</th>
          <th>Industry</th>
          <th>Dividend/Share</th>
          <th>EPS</th>
          <th>52 Week High</th>
          <th>52 Week Low</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{companyInfo.Exchange}</td>
          <td>{companyInfo.Sector}</td>
          <td>{companyInfo.Industry}</td>
          <td>{companyInfo.DividendPerShare}</td>
          <td>{companyInfo.EPS}</td>
          <td>{companyInfo['52WeekHigh']}</td>
          <td>{companyInfo['52WeekLow']}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default CompanyInfoTable;
