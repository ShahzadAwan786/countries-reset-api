'use client';

import React, { useEffect, useState } from "react";
import SearchBar from "./_components/SearchBar";
import CountryList from "./_components/CountrylList";


const API_URL = "https://restcountries.com/v3.1/all?fields=name,capital,region,population,flags";

export default function Home() {
  const [countries, setCountries] = useState([]);
  const [searchcountry, setsearchCountry] = useState("");

  useEffect(() => {
    fetchCountries();
  }, []);

  const fetchCountries = async () => {
    try {
      const response = await fetch(API_URL);
      if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
      const data = await response.json();
      setCountries(data);
    } catch (error) {
      console.error("Failed to fetch countries:", error);
    }
  };

  const filterCountries = countries.filter((country) =>
    country.name?.common?.toLowerCase().includes(searchcountry.toLowerCase())
  );

  return (
    <div className="">
      <SearchBar setsearchCountry={setsearchCountry} />
      < CountryList countries={filterCountries} />
      
    </div>
  ); 
}
