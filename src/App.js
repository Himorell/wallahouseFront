import React from 'react';
import './App.css';
import Products from './components/cards/Products';
import { FooterContainer } from './containers/footer'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <Products />
      <FooterContainer />
    </div>
  );
}

export default App;
