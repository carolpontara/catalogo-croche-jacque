import React, { useContext } from 'react';
import { SidebarContext } from '../contexts/SidebarContext';
import { BsBag } from 'react-icons/bs';

const Header = () => {
  const { isOpen, setIsOpen } = useContext(SidebarContext);

  return (
    <header className='bg-[#d1a6a6] p-4 flex flex-col items-center'>
      <img src={'./capa-site.png'} alt="Header" className='header-image h-90' />
      <div onClick={() => setIsOpen(!isOpen)} className='cursor-pointer mt-4'>
        <BsBag className='text-3xl text-white' />
      </div>
    </header>
  );
};

export default Header;
