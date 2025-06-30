import React from 'react'

export const FilterCountry = ({onSelect}) => {
    const continents = [
        { id: 1, name: 'Africa' },

        { id: 3, name: 'Asia' },
        { id: 4, name: 'Europe' },
        { id: 5, name: 'North America' },
        { id: 7, name: 'South America' },
        { id: 6, name: 'Oceania' },
    ]

    const selectHandle = (e) => {
        const regionName = e.target.value
        onSelect(regionName)
    }

    return (
        <div className='flex md:justify-end items-center my-4 px-6'>
            <select onChange={selectHandle}
            className='border-2 border-gray-300 dark:border-none rounded-sm p-2 dark:bg-gray-800 dark:text-white'>
                <option value="all">Filter by Region</option>
                {
                    continents.map((continent)=>{
                        return (
                            <option value={continent.name} key={continent.id} >
                                {continent.name}
                            </option>
                        )
                    })
                }
            </select>
        </div>
    )
}
