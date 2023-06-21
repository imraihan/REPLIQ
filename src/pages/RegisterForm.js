import { useState } from "react";
import { useDispatch } from "react-redux";
import { registerSuccess } from "../features/user/userSlice";
// import { Link }
import { Link, useNavigate } from "react-router-dom";

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    phone: "",
    password: "",
    name: "",
    email: "",
    employeeType: "",
  });

  const handleInputChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Save user data to local storage
    localStorage.setItem("userData", JSON.stringify(formData));

    // Dispatch registerSuccess action to update user state in Redux store
    dispatch(registerSuccess(formData));

    // Reset form fields
    setFormData({
      phone: "",
      password: "",
      name: "",
      email: "",
      employeeType: "",
    });

    // Redirect to the appropriate dashboard based on the user's employeeType
    if (formData.employeeType === "admin") {
      navigate("/admin-dashboard");
    } else {
      navigate("/customer-dashboard");
    }
  };

  return (
    <div className="flex justify-center items-center">
      <div className="w-full max-w-sm">
        <h2 className="text-3xl font-bold mb-8">Register here</h2>
        <form
          className="bg-white shadow-xl rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={handleSubmit}
        >
          <div className="mb-4">
            <label htmlFor="phoneNumber" className="block text-gray-700">
              Phone Number
            </label>
            <input
              type="text"
              id="phoneNumber"
              name="phone"
              className="mt-1 px-4 py-2 border rounded-md w-full"
              value={formData.phone}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="mt-1 px-4 py-2 border rounded-md w-full"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="mt-1 px-4 py-2 border rounded-md w-full"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 px-4 py-2 border rounded-md w-full"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="employeeType" className="block text-gray-700">
              Employee Type
            </label>
            <select
              id="employeeType"
              name="employeeType"
              className="mt-1 px-4 py-2 border rounded-md w-full"
              value={formData.employeeType}
              onChange={handleInputChange}
              required
            >
              <option value="">Select Employee Type</option>
              <option value="admin">Admin</option>
              <option value="customer">Customer</option>
            </select>
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-md"
          >
            Register
          </button>
          <div className="text-center mt-4">
            <span className="text-gray-500">Already have an account?</span>{" "}
            <Link to="/login" className="text-blue-500 hover:text-blue-700">
              Log in
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
