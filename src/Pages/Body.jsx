import { useSelector } from "react-redux";
import MainContainer from "../Component/MainContainer";
import SideBar from "../Component/SideBar";
import { Outlet } from "react-router-dom";

function Body() {
  const isMenuOpen = useSelector((state) => state?.menu?.isMenuOpen);
  console.log(isMenuOpen);
  return (
    <div className="grid grid-flow-col">
      {isMenuOpen && <SideBar />}
      {/* <MainContainer /> */}
      <Outlet />
    </div>
  );
}
export default Body;
