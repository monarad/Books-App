import React from 'react'
import { IoSearch } from "react-icons/io5";

function SearchBox({search,setSearch,searchHandler}) {
  return (
    <div>
        <input type='text' placeholder='search' value={search} onChange={(e)=>setSearch(e.target.value.toLowerCase())}/>
        <button onClick={searchHandler}><IoSearch /></button>
    </div>
  )
}

export default SearchBox