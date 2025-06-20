const SearchBar = ({ query, setQuery, onSearch }) => (
  <div className="search-bar">
    <input
      type="text"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      placeholder="Search books..."
    />
    <button onClick={onSearch}>Search</button>
  </div>
);

export default SearchBar;
