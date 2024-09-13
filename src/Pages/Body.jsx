import { useSelector } from "react-redux";
import SideBar from "../Component/SideBar";
import { Outlet } from "react-router-dom";

function Body() {
  const isMenuOpen = useSelector((state) => state?.menu?.isMenuOpen);

  return (
    <div className="flex">
      {isMenuOpen && <SideBar />}
      <div className={`flex-1 ml-${isMenuOpen ? '60' : '0'} p-4`}>
        <Outlet />
      </div>
    </div>
  );
}

export default Body;
