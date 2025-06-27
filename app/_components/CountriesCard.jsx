import React from 'react';
import Link from 'next/link';

export const CountriesCard = ({ country }) => {
  return (
    <Link href={`/country/${encodeURIComponent(country.name.common)}`}>
    <div className="  w-80 h-93 shadow-lg md:w-68 md:h-90">
     <img
  src={country.flags?.png||'/download.png'} 
  alt={country.name?.common}
  onError={(e) =>{ 
    e.target.onerror= null;
    e.target.src ='/download.png';

  }}
  className="w-full h-47 mb-7 md:mb-5 object-fit rounded-t-lg transition-all duration-150 cursor-pointer
   hover:scale-105 "
/>

      <h2 className="text-2xl md:text-xl font-bold mb-3 px-5">{country.name?.common}</h2>

      <p  className='px-5'>
        <strong>
          Population:
        </strong>
        {country.population}
      </p>

      <p className='px-5'>
        <strong>
          Capital:
        </strong>
        {country.capital}
      </p>

      <p className='px-5'>
        <strong>
          Region:
        </strong>
        {country.region}
      </p>
    </div>
</Link>
  );
};
