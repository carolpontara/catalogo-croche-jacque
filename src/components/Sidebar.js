import React, { useContext } from 'react';
import { IoMdArrowForward } from 'react-icons/io';
import CartItem from '../components/CartItem';
import { SidebarContext } from '../contexts/SidebarContext';
import { CartContext } from '../contexts/CartContext';

const Sidebar = () => {
  const { cart } = useContext(CartContext);
  const { isOpen, handleClose } = useContext(SidebarContext);

  const createOrderMessage = () => {
    let message = "Olá Jacque! 👋🏼\n\n";
    message += "Me interessei por alguns produtos do Crochê da Jacque 😊❤️:\n\n";

    cart.forEach((item, index) => {
      message += `${index + 1}. ${item.name} - Quantidade: ${item.amount}\n`;
    });

    message += "\nPodemos fazer um orçamento? 😊🛒";
    return encodeURIComponent(message); 
  };

  const orderLink = `https://api.whatsapp.com/send?phone=5514997401458&text=${createOrderMessage()}`;

  const handleOrderClick = () => {
    window.open(orderLink, '_blank'); 
    handleClose(); 
  };

  return (
    <div className={`fixed top-0 h-full shadow-2xl bg-red-200 transition-all duration-300 z-20 px-4 lg:px-8 ${isOpen ? 'right-0' : '-right-full'} w-full md:w-3/5 lg:w-1/3 xl:w-1/4 overflow-y-auto`}>
      <div className='flex items-center justify-between py-6 border-b'>
        <div className='uppercase text-sm font-semibold'>Carrinho</div>
        <div onClick={handleClose} className='cursor-pointer w-8 h-8 flex justify-center items-center'>
          <IoMdArrowForward className='text-2xl' />
        </div>
      </div>
      <div className="py-4">
        <div>
          {cart.map(item => (
            <CartItem item={item} key={item.id} />
          ))}
        </div>
        <button onClick={handleOrderClick} className="bg-red-300 text-white py-2 px-4 rounded hover:bg-red-600 transition duration-300">
          Enviar Pedido
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
