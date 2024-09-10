import MainContainer from "../Component/MainContainer";
import SideBar from "../Component/SideBar";

function Body() {
  return (
    <div className="grid grid-flow-col">
      <SideBar />
      <MainContainer />
    </div>
  );
}
export default Body;
