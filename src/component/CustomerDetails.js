import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const CustomerDetails = () => {
  const { customerId } = useParams();
  const userdata = useSelector((state) => state.user.userdata);
  const customer = userdata.find((user) => user.id === parseInt(customerId));
  console.log(customer);

  if (!customer) {
    return <div>Customer not found</div>;
  }

  return (
    <div className="bg-gray-100 p-4 rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Customer Details</h2>
      <div className="bg-white rounded-lg shadow-lg p-4">
        <p className="text-gray-600 mb-2">
          <span className="font-semibold">Name:</span> {customer.name}
        </p>
        <p className="text-gray-600 mb-2">
          <span className="font-semibold">Email:</span> {customer.email}
        </p>
        <p className="text-gray-600 mb-2">
          <span className="font-semibold">Phone:</span> {customer.phone}
        </p>
        <p className="text-gray-600 mb-2">
          <span className="font-semibold">Password:</span> {customer.password}
        </p>
      </div>
    </div>
  );
};

export default CustomerDetails;
