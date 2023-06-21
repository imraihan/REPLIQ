import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../features/user/userSlice';

const Navbar = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector((state) => state.user);
  
    const handleLogout = () => {
      dispatch(logout());
      navigate('/');
    };
  
    return (
      <nav className="bg-gray-800">
        <div className="container mx-auto px-4 py-2">
          <ul className="flex items-center justify-between">
            <li>
              <Link to="/" className="text-white text-lg font-bold">
                Home
              </Link>
            </li>
            <li className="flex items-center space-x-4">
              {user.isAuthenticated ? (
                <>
                  <span className="text-white">Welcome, {user.user.name}!</span>
                  {user.user.employeeType === 'admin' ? (
                    <Link to="/AdminDashboard" className="text-white hover:text-gray-300">
                      Admin Dashboard
                    </Link>
                  ) : (
                    <Link to="/CustomerDashboard" className="text-white hover:text-gray-300">
                      Customer Dashboard
                    </Link>
                  )}

                  <Link to="/product-list" className="text-white hover:text-gray-300">
                    Product List
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="text-white hover:text-gray-300"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link to="/login" className="text-white hover:text-gray-300">
                    Login
                  </Link>
                  <Link to="/register" className="text-white hover:text-gray-300">
                    Register
                  </Link>
                </>
              )}
            </li>
          </ul>
        </div>
      </nav>
    );
  };
  

export default Navbar;
