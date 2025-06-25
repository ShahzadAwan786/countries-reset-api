import React from 'react'

const SearchBar = ({ setsearchCountry }) => {
    return (
        <div className='md:px-13 px-6 mt-6 w-full '>
            <input 
                type="text"
                placeholder="Search Country..."
                className="border-2 border-gray-300 md:w-[400px] w-[350px] focus:w-[430px] 
             transition-all duration-300 ease-in-out  p-1 rounded-lg
             outline-none focus:ring-2 focus:ring-green-400"
                onChange={(e) => setsearchCountry(e.target.value)}
            />


        </div>
    )
}

export default SearchBar