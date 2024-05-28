import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import ProductDetails from './pages/ProductDetails'
import Sidebar from './components/Sidebar';
import Footer from './components/Footer'

const App = () => {
  const handleCategoryChange = (category) => {
    // Função vazia para definir a categoria selecionada como "Todas as Categorias"
  };

  return (
    <div className='overflow-hidden'>
      <Router>
        <Routes>
          <Route path='/' element={<Home onCategoryChange={handleCategoryChange} />} /> {/* Passe a função para Home */}
          <Route path='/product/:id' element={<ProductDetails />} />
        </Routes>
        <Sidebar />
        <Footer />
      </Router>
    </div>
  );
};

export default App;
