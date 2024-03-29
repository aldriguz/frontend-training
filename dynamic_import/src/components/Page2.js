import React from 'react';
import logo from '../logo.svg';

function Page2({ onRouteChange }) {
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
                    Learn React (Page 2)
                </a>
        </header>        
        <button onClick={() => onRouteChange('page1')}>Page 1</button>
        <button disabled className='disabled'>Page 2</button>
        <button onClick={() => onRouteChange('page3')}>Page 3</button>
    </div>
  );
}

export default Page2;
