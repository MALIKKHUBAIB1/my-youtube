function SearchBar({ inputChnageHandler, value }) {
  return (
    <div className="col-span-10 text-center ">
      <input
        type="text"
        placeholder="search"
        className="p-2 w-1/2 border  border-gray-600 rounded-l-full"
        value={value}
        onChange={(e) => inputChnageHandler(e.target.value)}
      />
      <button className="border border-gray-600 rounded-r-full p-2 text-center bg-gray-100">
        Search
      </button>
    </div>
  );
}

export default SearchBar;
