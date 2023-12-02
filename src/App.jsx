import './App.css';
import { Route, Routes } from 'react-router-dom';
import React from 'react';

import Header from './components/Header';
import { GlobalProvider } from './context/GlobalContext';
import Home from './views/Home';
import Footer from './components/Footer';
import Cart from './views/Cart';
import PizzaDetail from './components/PizzaDetail';

const App = () => {
  return (
    <GlobalProvider>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pizza/:id" element={<PizzaDetail />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>  <Footer />
    </GlobalProvider>
  );
};

export default App;
