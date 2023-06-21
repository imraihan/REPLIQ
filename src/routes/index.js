import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegistrationForm from '../pages/RegisterForm';
import LoginForm from '../pages/LoginForm';
import HomePage from '../pages/HomePage';
import Navbar from '../layout/Navbar';
import CustomerDashboard from '../component/CustomerDashboard ';
import ProductList from '../component/ProductList';
import ProductDetailsPage from '../component/ProductDetailsPage';
import AdminDashboard from '../component/AdminDashboard';
import CustomerDetails from '../component/CustomerDetails';
import AddProduct from '../component/AddProduct';


const Index = () => {
  return (
    <BrowserRouter>
    <Navbar />
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/register" element={<RegistrationForm />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/AdminDashboard" element={<AdminDashboard /> } />
            <Route path="/CustomerDashboard" element={<CustomerDashboard /> } />
            <Route path="/product-list" element={<ProductList /> } />
            <Route path="/products/:productId" element={ <ProductDetailsPage /> } />
            <Route path="/customer-details/:customerId" element={<CustomerDetails /> } />
            <Route path="/add-product" element={<AddProduct /> } />
        </Routes>
      </BrowserRouter>
  )
}

export default Index