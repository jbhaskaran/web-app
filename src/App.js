import React from 'react';
import ProductList from './components/ProductList'

import './foundation.css'
import './App.css';

function App() {
  return (
    <div>
      <header className='App-header'>
        List of Products
      </header>
      <div className='grid-container'>
        <ProductList />
      </div>
    </div>
  );
}

export default App;
