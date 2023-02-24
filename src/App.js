import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Components/Layout';
import Landing from './Pages/landing';
import Main from './Pages/main';
import HousePage from './Pages/housePage';
import Dashboard from './Pages/dashboard';
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
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/house-page/:id" element={<HousePage />} />
    </Routes>
</>
  );
}

export default App;
