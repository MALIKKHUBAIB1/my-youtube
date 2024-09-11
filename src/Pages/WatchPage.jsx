import { useParams } from "react-router-dom";

function WatchPage() {
  const { id } = useParams();
  console.log(id);
  return <div className="col-span-11">WatchPage</div>;
}

export default WatchPage;
