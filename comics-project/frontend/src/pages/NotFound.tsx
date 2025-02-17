import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex justify-center flex-col w-full items-center h-full min-h-screen font-bold text-xl gap-3">
      <span className="text-error text-2xl"> Not Found 404</span>
      <Link to={'/'} className="link link-primary">
        return Home{' '}
      </Link>
    </div>
  );
};

export default NotFound;
