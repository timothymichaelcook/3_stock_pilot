import React from 'react';

import '../styles/Globalstyles.css';

function Home() {

return (
<div className="columns is-mobile">
  <div className=" column panel">
      <p className="panel-heading">
        Headlines
      </p>
      
      <a className="panel-block is-active">
        <span className="panel-icon">
          <i className="fas fa-book" aria-hidden="true"></i>
        </span>
        bulma
      </a>
      <a className="panel-block">
        <span className="panel-icon">
          <i className="fas fa-book" aria-hidden="true"></i>
        </span>
        marksheet
      </a>
      <a className="panel-block">
        <span className="panel-icon">
          <i className="fas fa-book" aria-hidden="true"></i>
        </span>
        <span class="is-size-6">minireset.css</span>
      </a>
      <a className="panel-block">
        <span className="panel-icon">
          <i className="fas fa-book" aria-hidden="true"></i>
        </span>
        jgthms.github.io
      </a>
      <a className="panel-block">
        <span className="panel-icon">
          <i className="fas fa-code-branch" aria-hidden="true"></i>
        </span>
        daniellowtw/infboard
      </a>
      <a className="panel-block">
        <span className="panel-icon">
          <i className="fas fa-code-branch" aria-hidden="true"></i>
        </span>
        mojs
      </a>
    </div>
  </div>
  
)
}


export default Home; 