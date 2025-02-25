import '../index.css';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <div className='flex'>
      <div className="header">
      <h1 className="text-2xl mt-2 font-bold">Sahayatri</h1>
      </div>
      <nav className=''>
        <ul className="flex p-4 gap-4">
          <li>
            <NavLink className={(e)=>{return e.isActive?"text-green-500" : ""}} to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className={(e)=>{return e.isActive?"text-green-500" : ""}} to="/campaign">
              Campaign
            </NavLink>
          </li>
          <li>
            <NavLink className={(e)=>{return e.isActive?"text-green-500" : ""}} to="/about_us">
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink className={(e)=>{return e.isActive?"text-green-500" : ""}} to="/contact">
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink className={(e)=>{return e.isActive?"text-green-500" : ""}} to="/register">
              Register
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
