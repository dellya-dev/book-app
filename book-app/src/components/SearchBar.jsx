function SearchBar({ query, setQuery, onSearch }) {
  return (
    <div>
      <form onSubmit={onSearch}>
        <input
          type="text"
          placeholder="Search for books..."
          value={query}
          onChange={(e) => { setQuery(e.target.value) }} 
        />
        <button
          type="submit"
        >Search</button>
      </form>
    </div>
  )
}

export default SearchBar