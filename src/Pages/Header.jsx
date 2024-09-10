import { useSelector } from "react-redux";

function Header() {
  const isMenuOpen = useSelector((state) => state?.menu?.isMenuOpen);
  console.log(isMenuOpen);
  return (
    <header className="grid grid-flow-col shadow-md m-2 items-center sticky ">
      <div className="flex items-center justify-start col-span-1">
        <div className="m-3 text-3xl cursor-pointer hover:bg-gray-100">
          <svg
            className=""
            xmlns="http://www.w3.urg/2000/svg"
            height="24"
            viewBox="0 0 24 24"
            width="24"
            focusable="false"
            aria-hidden="true"
          >
            <path d="M21 6H3V5h18v1zm0 5H3v1h18v-1zm0 6H3v1h18v-1z"></path>
          </svg>
        </div>
        <img
          src="https://cdn.mos.cms.futurecdn.net/8gzcr6RpGStvZFA2qRt4v6.jpg"
          alt="logo"
          className="h-16 mx-3"
        />
      </div>

      <div className="col-span-10 text-center ">
        <input
          type="search"
          placeholder="search"
          className="p-2 w-1/2 border  border-gray-600 rounded-l-full"
        />
        <button className="border border-gray-600 rounded-r-full p-2 text-center bg-gray-100">
          Search
        </button>
      </div>
      <div className="col-span-1">
        <img
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
          className="w-10 h-9"
        />
      </div>
    </header>
  );
}

export default Header;
