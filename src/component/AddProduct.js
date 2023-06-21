import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addProduct } from "../features/products/productSlice";
import { v4 as uuidv4 } from "uuid";

const AddProduct = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [newProduct, setNewProduct] = useState({
    title: "",
    description: "",
    price: "",
    discountPercentage: "",
    rating: "",
    stock: "",
    brand: "",
    category: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Generate a unique id for the new product
    const productId = uuidv4();

    // Create the new product object with the generated id
    const newProductWithId = {
      id: productId,
      title: newProduct.title,
      description: newProduct.description,
      price: newProduct.price,
      discountPercentage: newProduct.discountPercentage,
      rating: newProduct.rating,
      stock: newProduct.stock,
      brand: newProduct.brand,
      category: newProduct.category,
    };

    // Dispatch the action to add the product
    dispatch(addProduct(newProductWithId));

    // Reset the form inputs
    setNewProduct({
      title: "",
      description: "",
      price: "",
      discountPercentage: "",
      rating: "",
      stock: "",
      brand: "",
      category: "",
    });

    // Navigate to the product list page
    navigate(`/product-list`);
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="max-w-md mx-auto">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h2 className="text-2xl font-bold mb-4">Add Product</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="title"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Title:
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={newProduct.title}
              onChange={handleInputChange}
              required
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="description"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Description:
            </label>
            <input
              type="text"
              id="description"
              name="description"
              value={newProduct.description}
              onChange={handleInputChange}
              required
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="price"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Price:
            </label>
            <input
              type="text"
              id="price"
              name="price"
              value={newProduct.price}
              onChange={handleInputChange}
              required
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="discountPercentage"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Discount Percentage:
            </label>
            <input
              type="text"
              id="discountPercentage"
              name="discountPercentage"
              value={newProduct.discountPercentage}
              onChange={handleInputChange}
              required
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="rating"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Rating:
            </label>
            <input
              type="text"
              id="rating"
              name="rating"
              value={newProduct.rating}
              onChange={handleInputChange}
              required
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="stock"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Stock:
            </label>
            <input
              type="text"
              id="stock"
              name="stock"
              value={newProduct.stock}
              onChange={handleInputChange}
              required
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="brand"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Brand:
            </label>
            <input
              type="text"
              id="brand"
              name="brand"
              value={newProduct.brand}
              onChange={handleInputChange}
              required
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="category"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Category:
            </label>
            <input
              type="text"
              id="category"
              name="category"
              value={newProduct.category}
              onChange={handleInputChange}
              required
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Add Product
            </button>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ml-4"
              onClick={handleGoBack}
            >
              Go Back
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
