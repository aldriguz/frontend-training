import React from 'react';
import logo from '../logo.svg';

function Page1({ onRouteChange }) {
  return (
    <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
              Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          >
              Learn React (Page 1)
          </a>          
      </header>
      <button disabled className='disabled'>Page 1</button>
      <button onClick={() => onRouteChange('page2')}>Page 2</button>
      <button onClick={() => onRouteChange('page3')}>Page 3</button>
    </div>    
  );
}

export default Page1;
