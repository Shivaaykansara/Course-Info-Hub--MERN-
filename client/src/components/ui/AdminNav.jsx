import { useState } from "react";
import { NavLink } from "react-router-dom";

export const AdminNav = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleOptionClick = () => {
    setDropdownOpen(false); // Close dropdown on option click
  };

  return (
    <div>
      <div className="navbar bg-gray-900">
        <div className="navbar-start text-gray-100">
          <div className="dropdown">
            <div 
              tabIndex={0} 
              role="button" 
              className="btn btn-ghost lg:hidden" 
              onClick={() => setDropdownOpen(!isDropdownOpen)} // Toggle dropdown
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            {isDropdownOpen && (
              <ul
                className="menu menu-sm dropdown-content bg-base-100 text-gray-900 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                <li>
                  <NavLink to='/admin/users' onClick={handleOptionClick}>Users</NavLink>
                </li>
                <li>
                  <NavLink to='/admin/contacts' onClick={handleOptionClick}>Contacts</NavLink>
                </li>
                <li>
                  <NavLink to='/admin/coursesInfo' onClick={handleOptionClick}>Courses</NavLink>
                </li>
              </ul>
            )}
          </div>
          <NavLink to='/admin' className="btn btn-ghost text-xl">Course Info Hub</NavLink>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal text-gray-100 px-1">
            
            <li>
              <NavLink to='/admin/users'>Users</NavLink>
            </li>
            <li>
              <NavLink to='/admin/contacts'>Contacts</NavLink>
            </li>
            <li>
              <NavLink to='/admin/coursesInfo'>Courses</NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <NavLink to='/' className="btn">Logout</NavLink>
        </div>
      </div>
    </div>
  );
};
