import React from 'react';
import {Link, useLocation} from "react-router-dom";

const Navigation = () => {
  const location = useLocation()

  const getActiveClassName = (route: string): string => {
    return location.pathname !== route ? '' : 'border-b-[2px]'
  }

  return (
    <div className="flex justify-between items-center h-[50px] px-5 shadow-md bg-gray-500 text-white">
      <h3 className="font-bold">Card wars</h3>
      <span>
        <Link to="/" className="mr-4">
          <span className={getActiveClassName('/')}>Home</span>
        </Link>
        <Link to="/cards" className="mr-4">
          <span className={getActiveClassName('/cards')}>Cards</span>
        </Link>
        <Link to="/add">
          <span className={getActiveClassName('/add')}>New</span>
        </Link>
      </span>
    </div>
  );
};

export default Navigation;
