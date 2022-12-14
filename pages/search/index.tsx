import Head from 'next/head'
import React from 'react'
import {SearchHeader} from '../../components'
import Response from "../../Response"
import {SearchResult} from '../../components'
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
        {/* Search Result */}
        <SearchResult results = {results}/>
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