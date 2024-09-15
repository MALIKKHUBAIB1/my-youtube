import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { closeMenu } from "../utils/appSlice";
import useFetchData from "../Hooks/useFetchData";
import CommentContainer from "../Component/commentcontainer/Commentcontainer";
import WatchpageItem from "../Component/watchPage/watchpageItem";
import LiveChat from "../Component/LiveChat";

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
  const { viewCount } = statistics || {};

  function handleshowDes() {
    setShowDes(!showDes);
  }

  return (
    <>
      <div className="grid grid-cols-12 gap-4 container mx-auto p-4 border border-blue-700">
        {/* Main Video Section */}
        <div className="col-span-9 w-full">
          <WatchpageItem
            id={id}
            title={title}
            channelTitle={channelTitle}
            handleshowDes={handleshowDes}
            showDes={showDes}
            description={description}
            viewCount={viewCount}
          />
          <hr className="border-black my-4 w-full" />
          {/* Comments Section */}
          <CommentContainer />
        </div>

        {/* Live Chat Sidebar */}
        <div className="col-span-3 h-[68%] border border-blue-500">
          <div className="sticky top-0">
            <LiveChat />
          </div>
        </div>
      </div>
    </>
  );
}

export default WatchPage;
