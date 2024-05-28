import React, { useContext } from 'react';
import { SidebarContext } from '../contexts/SidebarContext';
import { BsBag } from 'react-icons/bs';
import { ProductContext } from '../contexts/ProductContext';
import { IoSearch } from 'react-icons/io5'; // Importando o ícone de lupa

const Header = ({ onCategoryChange }) => {
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { products } = useContext(ProductContext);

  const categories = [...new Set(products.map(product => product.category))];

  const handleCategoryChange = (event) => {
    const category = event.target.value;
    onCategoryChange(category); 
  };

  return (
    <header className='bg-[#d1a6a6] p-4 flex flex-col items-center'>
      <img src={'./capa-site.png'} alt="Header" className='header-image h-60 mb-4' /> {/* Adicionando margem inferior */}
      <div className='relative flex items-center mb-4'>
        <select
          className='p-2 rounded-full pl-8 pr-4 mr-2' // Adicionando preenchimento à direita para o ícone de lupa e margem à direita para a sacola
          onChange={handleCategoryChange}
        >
          <option value=''>Todas as Categorias</option>
          {categories.map(category => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
        <IoSearch className='absolute left-2 top-1/2 transform -translate-y-1/2 text-[#d1a6a6]' /> {/* Posicionando o ícone de lupa */}
        <div onClick={() => setIsOpen(!isOpen)} className='cursor-pointer'>
          <BsBag className='text-3xl text-white' /> {/* Removendo a margem para colocar a sacola ao lado */}
          <span className="bg-red-500 text-white rounded-full h-5 w-5 flex items-center justify-center absolute -top-1 -right-1">1</span> {/* Adicionando a badge do lado da sacola */}
        </div>
      </div>
    </header>
  );
};

export default Header;
