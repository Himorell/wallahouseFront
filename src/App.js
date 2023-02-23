import "./App.css";
import LandingOne from "./Componentes/Moleculas/landingOne/LandingOne";
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Layout from './Components/Layout';
import Landing from './Pages/landing';
import Main from './Pages/main';
import ProductPage from './Pages/product-page';


const App = ()=> {
  return (
    <div className="App">
      <LandingOne />
    </div>
    <>
    <Routes>
        <Route element={<Layout />} />
        <Route index element={<Landing/>} />
        <Route path="/landing" element={<Landing />} />
        <Route path="/main" element={<Main />} />
        <Route path="/product-page" element={<ProductPage />} />
    </Routes>
</>
  );
}

export default App;
