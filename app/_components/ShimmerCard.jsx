import React from 'react';

const ShimmerCard = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-6 m-8">
      {Array.from({ length:256}).map((_, i) =>(

     
      <div key={i} className="w-80 md:w-68 md:h-90 h-93 bg-gray-300 rounded-lg shadow-lg animate-pulse">
        <div className="px-6 pt-54">
          <h2 className="bg-gray-200 h-6 w-3/4 rounded mb-3"></h2>
          <div className="bg-gray-200 h-4 w-35 px-5 mb-3 rounded"></div>
          <div className="bg-gray-200 h-4 w-1/2 rounded mb-3 px-5"></div>
          <div className="bg-gray-200 h-4 w-1/2 rounded px-5"></div>
        </div>
      </div>
 ))}
    
    </div>
  );
};

export default ShimmerCard;
