import { useRef, useState } from "react";
import Suggestion from "./Suggestion";

function SearchBar({ inputChnageHandler, value, suggestion }) {
  const [show, setShow] = useState(false);
  const ref = useRef(null);
  const handleFocus = () => {
    setShow(true);
  };
  function handleBlur() {
    setShow(false);
  }
  return (
    <>
      <div className="col-span-10 text-center ">
        <input
          type="text"
          placeholder="search"
          className="p-2 w-1/2 border  border-gray-600 rounded-l-full"
          value={value}
          ref={ref}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={(e) => inputChnageHandler(e.target.value)}
        />
        <button className="border border-gray-600 rounded-r-full p-2 text-center bg-gray-100">
          Search
        </button>
        <div className="fixed bg-white rounded-lg text-black shadow-lg w-[43rem] ml-80 my-1 text-left">
          {show && <Suggestion data={suggestion} />}
        </div>
      </div>
    </>
  );
}

export default SearchBar;
