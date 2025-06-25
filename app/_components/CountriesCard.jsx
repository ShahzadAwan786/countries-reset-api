import React from 'react';
import Link from 'next/link';

export const CountriesCard = ({ country }) => {
  return (
    <Link href={`/country/${encodeURIComponent(country.name.common)}`}>
    <div className="p-4 border-2 rounded-2xl  text-center ">
     <img
  src={country.flags?.png||'/download.png'} 
  alt={country.name?.common}
  onError={(e) =>{ 
    e.target.onerror= null;
    e.target.src ='/download.png';

  }}
  className="w-152 h-[150px] object-contain mb-6 rounded-lg transition-all duration-150 cursor-pointer
   hover:scale-105 shadow-lg"
/>

      <h2 className="text-2xl font-bold mb-2">{country.name?.common}</h2>

      <p >
        <strong>
          Population:
        </strong>
        {country.population}
      </p>

      <p>
        <strong>
          Capital:
        </strong>
        {country.capital}
      </p>

      <p>
        <strong>
          Region:
        </strong>
        {country.region}
      </p>
    </div>
</Link>
  );
};
