function Suggestion({ suggestionList, data }) {
  // Check if data exists and has more than one item
  return (
    <>
      <ul className="mt-2 w-full rounded-lg overflow-hidden bg-white border border-gray-300 shadow-lg">
        {data.map((suggest, i) => (
          <li
            className="p-2 hover:bg-gray-100 cursor-pointer transition duration-300 ease-in-out"
            key={i}
          >
            <i className="fa fa-search mr-2"></i>
            {suggest}
          </li>
        ))}
      </ul>
    </>
  );
}

export default Suggestion;
