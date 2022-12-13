import Head from 'next/head'
import React from 'react'
import {SearchHeader} from '../../components'

const Search = () => {
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