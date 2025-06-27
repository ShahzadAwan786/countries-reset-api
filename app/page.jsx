'use client';

import React, { useEffect, useState } from "react";
import SearchBar from "./_components/SearchBar";
import CountryList from "./_components/CountrylList";
import { FilterCountry } from "./_components/FilterCountry";
import Header from "./_components/Header";


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

 const getCountryByRegion = async (regionName) => {
    try {
      if( regionName === "all") return fetchCountries();
      const response = await fetch(`${"https://restcountries.com/v3.1"}/region/${regionName}`);
      if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
      const data = await response.json();
      setCountries(data);
    } catch (error) {
      console.error("Failed to filter countries by region:", error);
    }
  }


  return (
    <div className="">
      <Header/>
      <div className="md:flex justify-between">
      <SearchBar setsearchCountry={setsearchCountry} />
      <FilterCountry onSelect={getCountryByRegion} />
      </div>
      < CountryList countries={filterCountries} />
      
    </div>
  ); 
}
 