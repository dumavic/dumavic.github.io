import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Footer from "./components/Footer";

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import About from './pages/About';
import Shop from './pages/Shop';
import Collections from './pages/Collections';
import Login from './pages/Login';
import Cart from './pages/Cart';
import Contact from './pages/Contact';
import ItemPage from './pages/ItemPage';
import AccountPage from './pages/AccountPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>

        <Route path="/" element={<Navbar />} >

          <Route index element={<App />} />
          <Route path="/pages/shop" element={<Shop />} />
          <Route path="/pages/collections" element={<Collections />} />
          <Route path="/pages/about" element={<About />} />
          <Route path="/pages/login" element={<Login />} />
          <Route path="/pages/cart" element={<Cart />} />
          <Route path="/pages/contact" element={<Contact />} />
          <Route path="/pages/:name" element={<ItemPage />}/>
          <Route path="/pages/account" element={<AccountPage />}/>
        
        </Route>

      </Routes>
      </BrowserRouter>
<Footer />
      
  </React.StrictMode>
);