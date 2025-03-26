import '../index.css';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { HiOutlineUser } from "react-icons/hi";
import manImg from "../assets/man.png";
import { useState, useEffect, useRef } from 'react';
import { useAuth } from './../context/AuthContext';


const navigation = [
  { name: "Contact", href: "/contact" }
];

const Navigation = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);

  const {currentUser, logout} = useAuth()

  const handleLogout = () => {
    logout()
  }

  // Close dropdown when clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current && !dropdownRef.current.contains(event.target) &&
        buttonRef.current && !buttonRef.current.contains(event.target)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className='max-w-screen-2xl mx-auto px-4 py-6'>
      <nav className='flex justify-between items-center'>
        {/* left */}
        <div>
          <Link to='/'>
            <h1 className="text-2xl font-bold">Sahayatri</h1>
          </Link>
        </div>

        {/* right */}
        <div className='relative flex items-center md:space-x-3 space-x-2'>
          <ul className="flex p-4 gap-12">
            <li>
              <NavLink className={({ isActive }) => (isActive ? "text-green-500" : "")} to="/">
                Home
              </NavLink>
            </li>
            {/* <li>
              <NavLink className={({ isActive }) => (isActive ? "text-green-500" : "")} to="/campaign">
                Campaign
              </NavLink>
            </li> */}
            <li>
              <NavLink className={({ isActive }) => (isActive ? "text-green-500" : "")} to="/about_us">
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink className={({ isActive }) => (isActive ? "text-green-500" : "")} to="/contact">
                Contact
              </NavLink>
            </li>
            <li>
              <div>
                {
                  currentUser ? <>
                    <button
                      ref={buttonRef}
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    >
                      <img src={manImg} alt="" className={`size-7 rounded-full ${currentUser ? 'ring-2 ring-blue-500' : ''}`} />
                    </button>

                    {/* Show dropdown */}
                    {isDropdownOpen && (
                      <div ref={dropdownRef} className='absolute right-0 mt-2 w-30 bg-white shadow-lg rounded-md z-50'>
                        <ul className='py-2'>
                          {
                            navigation.map((item) => (
                              <li key={item.name} onClick={() => setIsDropdownOpen(false)}>
                                <Link to={item.href} className='block px-4 py-2 text-sm hover:bg-gray-100'>
                                  {item.name}
                                </Link>
                              </li>
                            ))
                          }
                          <li>
                            <button 
                            onClick={handleLogout}
                            className='block w-full text-left px-4 py-2 text-sm hover:bg-gray-100'>Logout</button>
                          </li>
                        </ul>
                      </div>
                    )}
                  </> : <Link to='/login'><HiOutlineUser className='w-6 h-6' /></Link>
                }
              </div>
            </li>
          </ul>
        </div>
      </nav>
      
    </header>
  );
};

export default Navigation;
