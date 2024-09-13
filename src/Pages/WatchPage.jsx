import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { closeMenu } from "../utils/appSlice";
import useFetchData from "../Hooks/useFetchData";

function WatchPage() {
  const [showDes, setShowDes] = useState(false);
  const { id } = useParams(); // Extract the video id from the route
  const dispatch = useDispatch();

  // Fetch data from the YouTube API
  const { data, loading, error } = useFetchData(
    `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${id}&key=AIzaSyA6TO7qVBDYpj8gI9pqw6h8e6bcQEdxHnI`
  );

  useEffect(() => {
    dispatch(closeMenu()); // Close the sidebar menu
  }, [dispatch]);

  if (loading)
    return <div className="text-center text-xl font-bold">Loading...</div>;
  if (error)
    return (
      <div className="text-center text-xl text-red-500">
        Error: {error.message}
      </div>
    );

  const { snippet, statistics } = data?.[0] || {};
  const { title, channelTitle, description } = snippet || {};
  snippet;
  const { viewCount } = statistics || {};
  function handleshowDes() {
    setShowDes(!showDes);
  }
  return (
    <div className="container mx-auto p-4 col-span-11 w-full">
      <div className="mb-4">
        <iframe
          width="85%"
          height="600"
          src={`https://www.youtube.com/embed/${id}`}
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
          title={title}
          className="rounded-lg shadow-lg"
        ></iframe>
      </div>
      <div className="w-[80%]">
        <h1 className="text-2xl font-bold mb-2">{title}</h1>
        <h2 className="text-lg text-gray-600 mb-4">{channelTitle}</h2>
        <p className="text-sm text-gray-500 mb-4">{viewCount} views</p>
        {showDes ? (
          <p className="text-sm text-gray-700" onClick={handleshowDes}>
            {description}
          </p>
        ) : (
          <p
            className="text-sm text-gray-700 cursor-pointer"
            onClick={handleshowDes}
          >
            {description.slice(0, 70)}....
          </p>
        )}
      </div>
    </div>
  );
}

export default WatchPage;
