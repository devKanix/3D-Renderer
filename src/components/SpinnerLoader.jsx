import React, { useState, useEffect } from 'react';

const SpinnerLoader = ({ text }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    window.addEventListener('load', () => setIsLoading(false));
    return () => window.removeEventListener('load', () => setIsLoading(false));
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="flex items-center justify-center h-screen bg-white">
          <img
            src="/spinner.svg"
            alt="Loading spinner"
            className="w-16 h-16 "
            style={{ fill: 'white' }}
          />
        </div>
      ) : (
        <div>
          <h3 className="text-lg font-semibold text-white">{text}</h3>
        </div>
      )}
    </>
  );
};

export default SpinnerLoader;
