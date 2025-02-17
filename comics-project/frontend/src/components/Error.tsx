import React from 'react';
import { IoIosWarning } from 'react-icons/io';
type ErrorProps = {
  error: Error;
};

const Error = ({ error }: ErrorProps) => {
  return (
    <div className="text-error text-xl flex flex-wrap items-center gap-2">
      <IoIosWarning />{' '}
      <p>
        {error.message}
        {/* aggiungere dropdown{error.stack} */}
      </p>
    </div>
  );
};

export default Error;
