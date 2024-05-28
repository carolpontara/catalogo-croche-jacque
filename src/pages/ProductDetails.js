import React, { useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';
import { ProductContext } from '../contexts/ProductContext';
import { IoMdArrowBack } from 'react-icons/io';

const ProductDetails = () => {
  const { id } = useParams();
  const { products } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);

  const product = products.find((item) => {
    return item.id === parseInt(id);
  });

  if (!product) {
    return (
      <section className='h-screen flex bg-white justify-center items-center'>
        Carregando...
      </section>
    );
  }

  const { name, price, description, image, category } = product;

  return (
    <section className='pt-24 pb-12 lg:py-32 bg-white min-h-screen flex items-center'>
      <div className='container mx-auto'>
        <div className='mb-8'>
          <Link to="/" className='flex items-center text-gray-700 hover:text-gray-900 transition duration-300'>
            <IoMdArrowBack className='text-2xl mr-2' />
            <span>Voltar para Home</span>
          </Link>
        </div>
        <div className='flex flex-col lg:flex-row items-center'>
          <div className='flex flex-1 justify-center items-center mb-8 lg:mb-0'>
            <img className='max-w-[300px] lg:max-w-sm' src={image} alt={name} />
          </div>
          <div className='flex-1 text-center lg:text-left'>
            <div className='text-sm capitalize text-gray-500 mb-4'>{category}</div>
            <h1 className='text-2xl font-bold mb-2'>{name}</h1>
            <div className='text-xl text-red-700 font-semibold mb-4'>{price}</div>
            <p className='mb-8 text-gray-700'>{description}</p>
            <button
              onClick={() => addToCart(product)}
              className='bg-red-300 text-white py-2 px-4 rounded hover:bg-red-600 transition duration-300'
            >
              Adicionar ao Carrinho
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
