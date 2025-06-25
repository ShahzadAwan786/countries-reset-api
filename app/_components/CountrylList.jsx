import React from "react";
import { CountriesCard } from "./CountriesCard";
function CountryList({ countries }) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  xl:grid-cols-4 gap-6 m-8">
            {countries.map((country, idx) => (
                <CountriesCard 
                key={idx}
                country={country}/>
            ))}
        </div>
    );

}

export default CountryList;