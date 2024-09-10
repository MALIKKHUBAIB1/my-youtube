import ButtonList from "./ButtonList";
import VideoCantiner from "./VideoContiner";

function MainContainer() {
  return (
    <div className="col-span-11 bg-sky-700 text-white">
      MainContainer
      <ButtonList />
      <VideoCantiner />
    </div>
  );
}

export default MainContainer;
