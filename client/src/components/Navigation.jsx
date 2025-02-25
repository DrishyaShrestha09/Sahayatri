import '../index.css';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <div>
      <nav>
        <ul className="flex gap-4">
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
