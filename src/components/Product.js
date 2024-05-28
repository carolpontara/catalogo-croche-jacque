import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { BsPlus, BsEyeFill } from 'react-icons/bs';
import { CartContext } from '../contexts/CartContext'
const Product = ({ product }) => {

  const { addToCart } = useContext(CartContext)
  const { id, image, category, name, price } = product;

  return (
    <div className='mb-4'>
      <div className='border border-[#d1a6a6] border-4 h-[300px] relative overflow-hidden group transition'>
        <div className='w-full h-full flex justify-center items-center relative'>
          <div className='w-[240px] mx-auto flex justify-center items-center z-20'>
            <img className='max-h-[220px] transition-transform transform hover:scale-110 transition duration-300'
              src={image}
              alt=''
            />
          </div>
          <div className='absolute top-0 right-0 p-2 flex justify-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all z-20'>
            <button onClick={() => addToCart(product, id)}>
              <div className='flex justify-center items-center text-white w-12 h-12 bg-red-500/80'>
                <BsPlus className='text-3x1' />
              </div>
            </button>
            <Link to={`/product/${id}`} className="w-12 h-12 bg-white flex justify-center items-center text-primary drop-shadow-xl">
              <BsEyeFill />
            </Link>
          </div>
        </div>
      </div>
      <div className='text-sm capitalize text-gray-500 mb-1'>{category}</div>
      <div className="bg-white p-4">
        <Link to={`/product/${id}`}>
          <h2 className="font-bold">{name}</h2>
        </Link>
        <h2 className="font-semibold">{price}</h2>
      </div>
    </div>
  );
};

export default Product;
