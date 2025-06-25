import React from 'react'

export const FilterCountry = () => {
 
  return (
    <div className='flex md:justify-end items-center my-4 px-6'> 
        <select name="region" id="region"
        className='border-2 border-gray-300 rounded-lg p-2 focus:outline-none focus:border-blue-500'>
            <option value="">Filter by Region</option>
            <option value="Africa">Africa</option>
            <option value="Americas">Americas</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
        </select>

    </div>
  )
}
