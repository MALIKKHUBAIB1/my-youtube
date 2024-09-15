import { useSelector } from "react-redux";
import SideBar from "../Component/SideBar";
import { Outlet } from "react-router-dom";

function Body() {
  const isMenuOpen = useSelector((state) => state?.menu?.isMenuOpen);

  return (
    <div className="grid grid-flow-col">
      {isMenuOpen && <SideBar />}
      <div className={`col-span-11 ${isMenuOpen ? "ml-60" : "ml-0"}`}>
      <Outlet />
      </div>
    </div>
  );
}

export default Body;
