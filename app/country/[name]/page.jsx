'use client';

import React, { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import ShimmerPage from './ShimmerPage';

export default function CountryDetailPage() {
  const { name } = useParams();
  const route = useRouter();
  const [country, setCountry] = useState(null);
  const [loading, setLoading] = useState(true);
  const [borderCountries, setBorderCountries]= useState([])


  useEffect(() => {
    const fetchCountry = async () => {
      try {
        const response = await fetch(`https://restcountries.com/v3.1/name/${name}?fullText=true`);
        const data = await response.json();
        const countryData = data [0];
        setCountry(countryData);

        if(countryData.borders && countryData.borders.length > 0) {
          const borderResponses = await fetch(`https://restcountries.com/v3.1/alpha?codes=${countryData.borders.join(',')}`)
          const borderData = await  borderResponses.json();
          setBorderCountries(borderData);
        }
        else {
          setBorderCountries([]);
        }
      
      } catch (error) {
        console.error('Error fetching country detail:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCountry();
  }, [name]);

  if (loading) return <ShimmerPage />;
  if (!country) return <div className="p-6 text-center dark:text-white">Country not found.</div>;

  return (
    <div className="min-h-screen bg-white dark:bg-gray-600 text-black dark:text-white px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <button
          onClick={() => window.history.back()}
          className="mb-8 px-6 py-2 bg-gray-200 dark:bg-gray-700 dark:text-white rounded shadow hover:bg-gray-300 dark:hover:bg-gray-600 transition"
        >
          ← Back
        </button>

        <div className="flex flex-col lg:flex-row gap-16 items-start">
          <img
            src={country.flags.png}
            alt={country.name.common}
            className="w-full max-w-[500px] rounded shadow-lg"
          />

          <div className="flex-1">
            <h1 className="text-3xl font-bold mb-6">{country.name.common}</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <p><strong>Native Name:</strong> {Object.values(country.name.nativeName || {})[0]?.common}</p>
              <p><strong>Population:</strong> {country.population.toLocaleString()}</p>
              <p><strong>Region:</strong> {country.region}</p>
              <p><strong>Sub Region:</strong> {country.subregion}</p>
              <p><strong>Capital:</strong> {country.capital?.[0]}</p>
              <p><strong>Top Level Domain:</strong> {country.tld?.[0]}</p>
              <p><strong>Currencies:</strong> {country.currencies ? Object.values(country.currencies).map((cur) => cur.name).join(', ') : 'N/A'}</p>
              <p><strong>Languages:</strong> {country.languages ? Object.values(country.languages).join(', ') : 'N/A'}</p>
            </div>

            {borderCountries.length>0 && (
              <div className="mt-4">
                <p className="font-semibold mb-2">Border Countries:</p>
                <div className="flex flex-wrap gap-2">
                  {borderCountries.map((borderCountry ) => (
                    <button key={borderCountry.cca3}
                    onClick={() => route.push(`/country/${borderCountry.name.common}`)}
                     className="bg-gray-200 dark:bg-gray-700 dark:text-white px-4 py-1 rounded shadow cursor-pointer hover:bg-gray-300 dark:hover:bg-gray-600 transition">
                    {borderCountry.name.common}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
