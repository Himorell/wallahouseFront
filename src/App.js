import './App.css';
import { Route, Routes } from 'react-router-dom';
import Layout from './Components/Layout';
import Landing from './Pages/landing';
import Main from './Pages/main';
import ProductPage from './Pages/product-page';
import Profile from './Pages/profile';


const App = ()=> {
  return (
    <>
    <Routes>
        <Route element={<Layout />} />
        <Route index element={<Landing/>} />
        <Route path="/landing" element={<Landing />} />
        <Route path="/main" element={<Main />} />
        <Route path="/product-page" element={<ProductPage />} />
        <Route path="/profile" element={<Profile />} />
    </Routes>
</>
  );
}

export default App;
