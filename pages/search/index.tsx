import Head from 'next/head'
import React from 'react'
import {SearchHeader, SearchResult, ImageResults} from '../../components'
import Response from "../../Response"
import { useRouter } from 'next/router'

const Search = ({results}) => {
  console.log(results)
  const router = useRouter()
  return (
    <div>
      <Head>
        <title>{router.query.term} - Search page</title>
      </Head>
      {/* Search Header */}
      <SearchHeader />
      {/* Search web and image Result */}
      {router.query.searchType === "image" ? (
        <ImageResults results={results} />
      ) : (
        <SearchResult results={results} />
      )}
    </div>
  );
}
export default Search

export const getServerSideProps = async (context) => {
  const mockData = false
  const startIndex = context.query.start || "1"
  const data = mockData ? Response : await fetch(`https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${context.query.term}${context.query.searchType && "&searchType=image"}&start=${startIndex}`).then((response) => response.json())
  return{
    props:{
      results:data
    }
  }
}