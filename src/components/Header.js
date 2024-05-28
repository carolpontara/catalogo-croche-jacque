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
      <img src={'./capa-site.png'} alt="Header" className='header-image h-60 mb-4' />
      <div className='flex items-center justify-center mb-4'>
        <a href="https://api.whatsapp.com/send?phone=5514997401458" target="_blank" rel="noopener noreferrer">
          <img src="./whatsapp-icon.png" alt="WhatsApp" className="w-12 h-12 mr-4" />
        </a>
        <a href="https://www.facebook.com/jacqueline.silva.10236115" target="_blank" rel="noopener noreferrer">
          <img src="./facebook-icon.png" alt="Facebook" className="w-12 h-12 mr-4" />
        </a>
        <a href="https://www.instagram.com/jacquelinesilva315/?hl=pt_BR" target="_blank" rel="noopener noreferrer">
          <img src="./instagram-icon.png" alt="Instagram" className="w-12 h-12" />
        </a>
      </div>
      <div className='relative flex items-center mb-4'>
        <select
          className='p-2 rounded-full pl-8 pr-4 mr-2'
          onChange={handleCategoryChange}
        >
          <option value=''>Todas as Categorias</option>
          {categories.map(category => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>

        <IoSearch className='absolute left-2 top-1/2 transform -translate-y-1/2 text-[#d1a6a6]' />
        <div onClick={() => setIsOpen(!isOpen)} className='cursor-pointer'>
          <BsBag className='text-3xl text-white mr-4' />
        </div>

      </div>
    </header>
  );
};

export default Header;
