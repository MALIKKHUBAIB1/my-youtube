import useFetchData from "../Hooks/useFetchData";
import { URL } from "../utils/constant";
import ErrorPage from "../utils/Error/ErrorPage";
import VideoCard from "./VideoCard";

function VideoContiner() {
  const { data, loading, error } = useFetchData(URL);
  if (loading) {
    return <p className="text-red-600">loading...</p>;
  }
  if (error) {
    return (
      <ErrorPage
        message={error.message || "something Went Wrong"}
        status={error.status || 401}
      />
    );
  }

  return (
    <div className="flex flex-wrap ">
      {data &&
        data.map((data) => {
          return <VideoCard info={data} key={data.id} />;
        })}
    </div>
  );
}

export default VideoContiner;
