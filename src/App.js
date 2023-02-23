
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Layout from './Components/Layout';
import Landing from './Pages/landing';
import Main from './Pages/main';
import ProductPage from './Pages/product-page';
import Form from './Pages/form';

import { FooterContainer } from './containers/footer'

const App = ()=> {
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
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
