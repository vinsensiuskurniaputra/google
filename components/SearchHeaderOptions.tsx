import React from "react";
import SearchHeaderOption from "./SearchHeaderOption";
import { SearchIcon, PhotographIcon } from "@heroicons/react/outline";
import { useRouter } from "next/router";

const SearchHeaderOptions = () => {
  const router = useRouter()

  return (
    <div className="flex space-x-8 select-none w-full justify-center text-sm text-gray-700 lg:pl-52 lg:justify-start">
      <SearchHeaderOption title='All' Icon={SearchIcon} active={router.query.searchType === "" || !router.query.searchType}/>
      <SearchHeaderOption title='Images' Icon={PhotographIcon} active={router.query.searchType === 'image'}/>
    </div>
  );
};

export default SearchHeaderOptions;
