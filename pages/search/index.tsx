import Head from 'next/head'
import React from 'react'
import {SearchHeader} from '../../components'
import Response from "../../Response"

const Search = ({results}) => {
  console.log(results)
  return (
    <div>
        <Head>
            <title>Search Page</title>
        </Head>
        {/* Search Header */}
        <SearchHeader />
        {/* Search Result */}
    </div>
  )
}
export default Search

export const getServerSideProps = async (context) => {
  const mockData = true
  const data = mockData ? Response : await fetch(`https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${context.query.term}${context.query.searchType && "?searchType=image"}`).then((response) => response.json())
  return{
    props:{
      results:data
    }
  }
}