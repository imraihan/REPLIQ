import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../features/user/userSlice';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({ phone: '', password: '' });
  const [errorMessage, setErrorMessage] = useState('');

  const { phone, password } = loginData;

  const onChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (phone === '' || password === '') {
      setErrorMessage('Please enter both phone number and password.');
    } else {
      dispatch(login({ phone, password }))
        .then((response) => {
          // Login successful
          setErrorMessage('');
          setLoginData({ phone: '', password: '' });
          navigate('/');
        })
        .catch((error) => {
          // Login failed
          setErrorMessage('Invalid login credentials. Please try again.');
        });
    }
  };

  return (
    <div className="flex justify-center items-center">
      <form
        className="w-full max-w-sm bg-white shadow-md rounded px-8 mt-20 pt-6 pb-8 mb-4"
        onSubmit={handleSubmit}
      >
        <h2 className="text-3xl font-bold mb-8">Login here</h2>
        {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}
        <div className="mb-4">
          <label htmlFor="phone" className="block text-gray-700 text-sm font-bold mb-2">
            Phone Number
          </label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={phone}
            onChange={onChange}
            required
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={onChange}
            required
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Log in
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
