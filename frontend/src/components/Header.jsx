import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
   
  return (
    <div className="bg-black shadow-sm p-3">
  <div className="container mx-auto flex items-center justify-between">
    <h2 className="text-2xl font-semibold text-blue-500">Taskly</h2>
    <div className="flex items-center space-x-6">
      <Link
        to="/"
        className="text-center p-2 rounded-md text-blue-200 font-bold hover:bg-blue-400"
      >
        Home
      </Link>
      <Link
        to="/addtask"
        className="text-center p-2 rounded-md text-blue-200 font-bold hover:bg-blue-400"
      >
        Add Task
      </Link>
      <Link
        to="/viewtask"
        className="text-center p-2 rounded-md text-blue-200 font-bold hover:bg-blue-400"
      >
        View Task
      </Link>
    </div>
  </div>
</div>

  );
};

export default Header;
