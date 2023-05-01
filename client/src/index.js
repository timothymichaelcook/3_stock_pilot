import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
// import client from './utils/apolloClient';
import './styles/Globalstyles.css';
import 'bulma/css/bulma.min.css';
import App from './App';



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// ReactDOM.render(
//   <React.StrictMode>
//     <ApolloProvider client={client}>
//       <Router>
//         <App />
//       </Router>
//     </ApolloProvider>
//   </React.StrictMode>,
//   document.getElementById('root')
// ); 
