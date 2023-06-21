import React from 'react';
import { useSelector } from 'react-redux';

const CustomerDashboard = () => {
  const user = useSelector((state) => state.user.user);
  const products = useSelector((state) => state.products.data);
  const totalProducts = products.length;

  return (
    <div className="flex items-center justify-center mt-20">
      <div className="bg-blue-100 border border-blue-500 rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
        <div className="border-b border-gray-300 pb-4 mb-4">
          <h3 className="text-xl font-semibold">User Information</h3>
          <p className="text-gray-600">Name: {user.name}</p>
          <p className="text-gray-600">Email: {user.email}</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold">Total Products</h3>
          <p className="text-gray-600">Count: {totalProducts}</p>
        </div>
      </div>
    </div>
  );
};

export default CustomerDashboard;
