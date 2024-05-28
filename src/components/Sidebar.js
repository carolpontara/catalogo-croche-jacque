import React, { useContext } from 'react';
import { IoMdArrowForward } from 'react-icons/io';
import { FiTrash2 } from 'react-icons/fi';
import CartItem from '../components/CartItem';
import { Link } from 'react-router-dom';
import { SidebarContext } from '../contexts/SidebarContext';
import { CartContext } from '../contexts/CartContext';

const Sidebar = () => {
  const { cart } = useContext(CartContext)
  const { isOpen, handleClose } = useContext(SidebarContext);

  return (
    <div className={`fixed top-0 h-full shadow-2xl bg-red-200 transition-all duration-300 z-20 px-4 lg:px-[35px] ${isOpen ? 'right-0' : '-right-full'} w-full md:w-[35vw] xl:max-w-[30vw]`}>
      <div className='flex items-center justify-between py-6 border-b'>
        <div className='uppercase text-sm font-semibold'>Carrinho</div>
        <div onClick={handleClose} className='cursor-pointer w-8 h-8 flex justify-center items-center'>
          <IoMdArrowForward className='text-2xl' />
        </div>
      </div>
      <div className="py-4">
        <div>{cart.map(item => {
          return (
            <CartItem item={item} key={item.id} />
          )
        })}</div>
        <Link onClick={handleClose} to="/" className="block mt-4 text-gray-800">
          Enviar Pedido
        </Link>
      </div>

    </div>
  );
};

export default Sidebar;
