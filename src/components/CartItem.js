import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { IoMdClose } from 'react-icons/io';
import { CartContext } from '../contexts/CartContext'
const CartItem = ({ item }) => {
  const { id, name, image, price, amount } = item;
  const { removeFromCart } = useContext(CartContext)
  const parsePrice = (priceStr) => {
    const numericString = priceStr.replace(/[^\d,]/g, '').replace(',', '.');
    return parseFloat(numericString);
  };

  const numericPrice = parsePrice(price);

  return (
    <div className='w-full min-h-[150px] flex items-center justify-between p-4 bg-white rounded-lg shadow-md mb-4 relative'>
      <div
        className='absolute top-2 right-2 text-gray-500 hover:text-red-500 transition'
        onClick={() => removeFromCart(id)}>
        <IoMdClose size={24} />
      </div>
      <div className='flex items-center gap-x-4'>
        <Link to={`/product/${id}`}>
          <img className='max-w-[80px]' src={image} alt={name} />
        </Link>
        <div>
          <Link to={`/product/${id}`} className='font-bold hover:underline'>{name}</Link>
          <div className='text-sm text-gray-500'>{price}</div>
        </div>
      </div>
      <div className='text-right'>
        <div className='font-bold'>Qtd: {amount}</div>
        <div className='text-sm text-gray-500'>Total: R$ {(numericPrice * amount).toFixed(2)}</div>
      </div>
    </div>
  );
};

export default CartItem;
