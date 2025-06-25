'use client';

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';

export default function CountryDetailPage() {
  const { name } = useParams();
  const [country, setCountry] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCountry = async () => {
      try {
        const response = await fetch(`https://restcountries.com/v3.1/name/${name}?fullText=true`);
        const data = await response.json();
        setCountry(data[0]);
      } catch (error) {
        console.error('Error fetching country detail:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCountry();
  }, [name]);

  if (loading) return <div className="p-6 text-center">Loading country details...</div>;
  if (!country) return <div className="p-6 text-center">Country not found.</div>;

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-8 bg-gray-50">
      <div className="w-full max-w-3xl bg-amber-100 p-6 md:p-10 rounded-2xl shadow-lg text-center">
        <img
          src={country.flags.png}
          alt={country.name.common}
          className="w-[200px] sm:w-[250px] mx-auto mb-6 rounded-lg shadow"
        />
        <h1 className="text-2xl sm:text-3xl font-bold mb-4">{country.name.common}</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4  text-base sm:text-lg">
          <p><strong>Capital:</strong> {country.capital?.[0]}</p>
          <p><strong>Region:</strong> {country.region}</p>
          <p><strong>Population:</strong> {country.population.toLocaleString()}</p>
          <p><strong>Subregion:</strong> {country.subregion}</p>
          <p><strong>Area:</strong> {country.area.toLocaleString()} km²</p>
          <p><strong>Timezone:</strong> {country.timezones?.[0]}</p>
        </div>

        <button
          onClick={() => window.history.back()}
          className="mt-8 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Back
        </button>
      </div>
    </div>
  );
}
