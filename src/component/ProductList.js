import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../features/products/productSlice";
import { Link } from "react-router-dom";

const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.data);
  const loading = useSelector((state) => state.products.loading);
  const error = useSelector((state) => state.products.error);

  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem("products"));

    if (storedProducts) {
      // If products are available in local storage, dispatch them to the Redux store
      dispatch(fetchProducts(storedProducts));
    } else {
      // Fetch products from API if not found in local storage
      dispatch(fetchProducts());
    }
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const totalProducts = products.length;


  return (
    <div className="min-h-screen py-8">
      <h2 className="text-3xl text-black text-center mb-6">Product List</h2>
      <div className="flex justify-center">
        <div className="mx-auto">
          <Link to="/add-product">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Add Product
            </button>
          </Link>
          <table className="bg-white shadow-md rounded">
            <thead>
              <tr>
                <th className="px-4 py-2">Title</th>
                <th className="px-4 py-2">Stock</th>
                <th className="px-4 py-2">Brand</th>
                <th className="px-4 py-2">Price</th>
                <th className="px-4 py-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <tr key={index < 6 ? index + 1 : index + 2}>
                  <td className="border px-4 py-2">{product.title}</td>
                  <td className="border px-4 py-2">{product.stock}</td>
                  <td className="border px-4 py-2">{product.brand}</td>
                  <td className="border px-4 py-2">${product.price}</td>
                  <td className="border px-4 py-2">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                      <Link
                        to={`/products/${index < 6 ? index + 1 : index + 2}`}
                        className="text-white-500"
                      >
                        Show Details
                      </Link>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="text-white text-center mt-4">
            Total Products: {totalProducts}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;



