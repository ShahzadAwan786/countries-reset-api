import React from 'react'

const SearchBar = ({ setsearchCountry }) => {
    return (
        <div className='flex justify-center mt-10 w-full '>
            <input
                type="text"
                placeholder="Search Country..."
                className="border-2 border-black md:w-[220px] w-200px focus:w-[270px] 
             transition-all duration-300 ease-in-out p-1 md:p-2 rounded-lg
             outline-none focus:ring-2 focus:ring-green-400"
                onChange={(e) => setsearchCountry(e.target.value)}
            />


        </div>
    )
}

export default SearchBar