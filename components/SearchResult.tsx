import React from 'react'

const SearchResult = ({results}) => {
  return (
    <div className='w-full mx-auto px-3 sm:pl-[5%] md:pl-[14%] lg:pl-52'>
      <p className='text-gray-600 text-sm mb-5 mt-3'>
        About {results.searchInformation.formattedTotalResults} result (
        {results.searchInformation.formattedSearchTime} seconds)
      </p>
    </div>
  );
}

export default SearchResult