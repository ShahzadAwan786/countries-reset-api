import React from 'react';

const ShimmerPage = () => {
  return (
    <div className="min-h-screen bg-white text-black px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8 h-[48px] w-[150px] bg-gray-300 rounded shadow animate-pulse"></div>

        <div className="flex flex-col lg:flex-row gap-12 ">
          <div className="w-full lg:w-[500px] h-[250px] md:h-[300px] bg-gray-300 rounded shadow-lg animate-pulse"></div>

          <div className="flex-1 ">
            <div className="h-8 w-25 bg-gray-300 rounded mb-6 animate-pulse"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <strong className='flex lg:flex-row '>Native Name:
             <p className="w-16 h-6 bg-gray-300 rounded animate-pulse mx-2"></p>
             </strong>
                <strong className='flex lg:flex-row '>Population:
             <p className="w-16 h-6 bg-gray-300 rounded animate-pulse mx-2"></p>
             </strong>
                <strong className='flex lg:flex-row '>Region:
             <p className="w-16 h-6 bg-gray-300 rounded animate-pulse mx-2"></p>
             </strong>
                <strong className='flex lg:flex-row '>Sub Region:
             <p className="w-16 h-6 bg-gray-300 rounded animate-pulse mx-2"></p>
             </strong>
                <strong className='flex lg:flex-row '>Capital:
             <p className="w-16 h-6 bg-gray-300 rounded animate-pulse mx-2"></p>
             </strong>
                <strong className='flex lg:flex-row '>Top Level Domain:
             <p className="w-16 h-6 bg-gray-300 rounded animate-pulse mx-2"></p>
             </strong>
                <strong className='flex lg:flex-row '>Currencies:
             <p className="w-16 h-6 bg-gray-300 rounded animate-pulse mx-2"></p>
             </strong>
                <strong className='flex lg:flex-row '>Languages:
             <p className="w-16 h-6 bg-gray-300 rounded animate-pulse mx-2"></p>
             </strong>
            </div>

      
              <div className="mt-2">
                <p className="font-semibold mb-2">Border Countries:</p>
                <div className="flex flex-wrap gap-2">
                
               {Array.from({length:3}).map((_, i) => (
                <div key = {i} className="bg-gray-200 dark:bg-gray-700 dark:text-white px-12 py-4 rounded shadow cursor-pointer hover:bg-gray-300 dark:hover:bg-gray-600 transition"> </div>
               ))}
                 
                </div>
              </div>
            

          </div>
        </div>
      </div>
    </div>
  );
};

export default ShimmerPage;
