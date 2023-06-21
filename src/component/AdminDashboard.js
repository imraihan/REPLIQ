import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUserData } from '../features/user/userSlice';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
  const user = useSelector((state) => state.user.user);
  const userdata = useSelector((state) => state.user.userdata);
  const customers = userdata.filter((user) => user.employeeType === 'customer');
  const totalCustomers = customers.length;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserData());
  }, [dispatch]);

  return (
    <div className="bg-gray-100 p-4 rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Admin Dashboard</h2>
      <div className="border-b border-gray-300 pb-4 mb-4">
        <h3 className="text-xl font-semibold">User Information</h3>
        <p className="text-gray-600">Name: {user.name}</p>
        <p className="text-gray-600">Email: {user.email}</p>
      </div>
      <div>
        <h3 className="text-xl font-semibold">Total Customers</h3>
        <p className="text-gray-600">Count: {totalCustomers}</p>
      </div>
      <div>
        <h3 className="text-xl font-semibold">Customer List</h3>
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Name
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Email
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Phone Number
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Action
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {customers.map((customer) => (
              <tr key={customer.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">
                    {customer.name}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500">{customer.email}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500">{customer.phone}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <Link
                    to={`/customer-details/${customer.id}`}
                    className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md inline-block"
                  >
                    Customer Details
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminDashboard;
