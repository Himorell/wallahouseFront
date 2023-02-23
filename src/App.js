import './App.css';
import { Route, Routes } from 'react-router-dom';
import Layout from './Components/Layout';
import Landing from './Pages/landing';
import Main from './Pages/main';
import ProductPage from './Pages/product-page';
import Form from './Pages/form';


const App = ()=> {
  return (
    <>
    <Routes>
        <Route element={<Layout />} />
        <Route index element={<Landing/>} />
        <Route path="/landing" element={<Landing />} />
        <Route path="/main" element={<Main />} />
        <Route path="/form" element={<Form />} />
        <Route path="/product-page" element={<ProductPage />} />
    </Routes>
  </>

  );
}

export default App;
