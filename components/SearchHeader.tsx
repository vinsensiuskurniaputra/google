import React from "react";
import { useRouter } from "next/router";
import { useRef } from "react";
import { MicrophoneIcon, SearchIcon, XIcon } from "@heroicons/react/solid";
import User from "./User";
import SearchHeaderOptions from "./SearchHeaderOptions";

const SearchHeader = () => {
  const router = useRouter();
  const searchInputRef = useRef(null);
    const search = (event) => {
        event.preventDefault();
        const term = searchInputRef.current.value.trim()
        if(!term)(
            router.push('/')
        )
        router.push(`/search?term=${term}&searchType=`);
    }

  return (
    <header className='sticky top-0 bg-white'>
      <div className='p-6 w-full items-center flex'>
        <img
          onClick={() => router.push("/")}
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png'
          className='w-[120px] h-fit cursor-pointer'
        />
        <form className='flex border border-gray-200 rounded-full shadow-lg px-6 py-3 flex-grow max-w-3xl items-center ml-10'>
          <input
            className='flex-grow focus:outline-none'
            type='text'
            defaultValue={router.query.term}
            ref={searchInputRef}
          />
          <XIcon onClick={() => (searchInputRef.current.value = "")} className='h-7 text-gray-500 cursor-pointer sm:mr-3' />
          <MicrophoneIcon className='h-6 hidden sm:inline-flex text-blue-500 pl-4 border-l-2 border-gray-300' />
          <SearchIcon className='h-6 hidden sm:inline-flex text-blue-500' />
          <button type="submit" onClick={search} hidden></button>
        </form>
        <User className='ml-auto no-wrap' />
      </div>
      <SearchHeaderOptions />
    </header>
  );
};

export default SearchHeader;
