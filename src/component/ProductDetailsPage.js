import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProductDetailsPage = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const products = useSelector((state) => state.products.data);
  const product = products.find((product) => product.id === parseInt(productId));

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="max-w-md mx-auto">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="px-6 py-4">
          <h2 className="text-2xl font-semibold mb-2">{product.title}</h2>
          <p className="text-gray-600 mb-4">{product.description}</p>
          <div className="flex flex-wrap">
            <div className="w-1/2">
              <div className="text-gray-700 font-semibold">Price:</div>
              <div>${product.price}</div>
            </div>
            <div className="w-1/2">
              <div className="text-gray-700 font-semibold">Stock:</div>
              <div>{product.stock}</div>
            </div>
            <div className="w-1/2">
              <div className="text-gray-700 font-semibold">Brand:</div>
              <div>{product.brand}</div>
            </div>
            <div className="w-1/2">
              <div className="text-gray-700 font-semibold">Category:</div>
              <div>{product.category}</div>
            </div>
            <div className="w-1/2">
              <div className="text-gray-700 font-semibold">Discount Price:</div>
              <div>{product.discountPercentage}</div>
            </div>
            <div className="w-1/2">
              <div className="text-gray-700 font-semibold">Rating:</div>
              <div>{product.rating}</div>
            </div>
          </div>
        </div>
        <div className="px-6 py-4">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={handleGoBack}
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
