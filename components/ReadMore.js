import React, { useState } from 'react';

const ReadMore = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div>{children}</div>
      </div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-primary-500 hover:text-primary-600 font-medium focus:outline-none"
      >
        {isOpen ? 'Show less' : 'Read more about it'}
      </button>
    </div>
  );
};

export default ReadMore;
