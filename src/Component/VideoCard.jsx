import React from "react";
import { Link } from "react-router-dom";

function VideoCard({ info }) {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;

  return (
    <Link to={`/watch/${info.id}`}>
      <div className="p-2 m-2 w-72 shadow-md col-span-3">
        <img
          src={thumbnails?.medium?.url}
          alt="thumbnail"
          className="rounded-lg"
        />
        <ul>
          <li className="font-bold py-2">{title}</li>
          <li>{channelTitle}</li>
          <li>{statistics.viewCount} views</li>
        </ul>
      </div>
    </Link>
  );
}

export default VideoCard;
