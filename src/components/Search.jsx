

// eslint-disable-next-line react/prop-types
function Search({query , setQuery}) {
  return (
    <div>
        <input type="text" 
        className="text-field"
         placeholder="search...." 
         value={query}
         onChange={(e)=>setQuery(e.target.value)}/>
    </div>
  )
}

export default Search