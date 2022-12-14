import React from "react";
import { SearchIcon, MicrophoneIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";
import { useRef } from "react";

const Body = () => {
  const router = useRouter();
  const searchInputRef = useRef(null);
  const search = (event) => {
    event.preventDefault();
    const term = searchInputRef.current.value;
    if(!term.trim)return;
    router.push(`/search?term=${term.trim()}&searchType=`)
  };

  return (
    <form className='flex flex-col items-center mt-40'>
      <img
        src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png'
        width='300'
        className='object-cover'
      />
      <div className='flex items-center mt-5 w-full max-w-[90%] sm:max-w-xl lg:max-w-2xl border border-gray-200 rounded-full py-3 px-5 hover:shadow-lg focus-within:shadow-lg'>
        <SearchIcon className='h-5 text-gray-500' />
        <input
          ref={searchInputRef}
          type='text'
          className='flex-grow focus:outline-none mx-3'
        />
        <MicrophoneIcon className='h-5' />
      </div>
      <div className='flex justify-center flex-col sm:flex-row w-1/2 space-y-2 sm:space-y-0 mt-8 sm:space-x-8'>
        <button type="submit" onClick={search} className='btn'>
          Google Search
        </button>
        <button className='btn'>I'm Feeling Lucky</button>
      </div>
    </form>
  );
};

export default Body;
