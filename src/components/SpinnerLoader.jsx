import React, { useState, useEffect } from 'react';

const SpinnerLoader = ({ text }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => setIsLoading(false);
    window.addEventListener('load', handleLoad);

    return () => window.removeEventListener('load', handleLoad);
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen bg-white">
        <img
          src="/spinner.svg"
          alt="Loading spinner"
          className="w-16 h-16"
        />
      </div>
    );
  }

  return (
    <div>
      <h3 className="text-lg font-semibold text-white">{text}</h3>
    </div>
  );
};

export default SpinnerLoader;
