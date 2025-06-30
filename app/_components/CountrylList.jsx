import React from "react";
import { CountriesCard } from "./CountriesCard";
import ShimmerCard from "./ShimmerCard";
function CountryList({ countries }) {
    console.log("CountryList received countries:", countries);
    return (
        <>
        {!countries.length ? (<ShimmerCard />) 
        :<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4 
        gap-6 m-8 px-6">
            {countries.map((country, idx) => (
                <CountriesCard 
                key={idx}
                country={country}/>
            ))}

        </div>}
       
        

       
        
</>
        
    );

}

export default CountryList;