import './SearchBar.css'

function SearchBar({ query, setQuery, onSearch }) {
  return (
    <div className="search-bar">
      <form 
        className='search-form'
        onSubmit={onSearch}>
        <input
          className='search-input'
          type="text"
          placeholder="Search for books..."
          value={query}
          onChange={(e) => { setQuery(e.target.value) }} 
        />
        <button
          className='search-button'
          type="submit"
        >Search</button>
      </form>
    </div>
  )
}

export default SearchBar