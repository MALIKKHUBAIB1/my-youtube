import React from 'react'

function WatchpageItem({id,title,channelTitle,handleshowDes,showDes,description,viewCount}) {
  return (
    <>
    <div className="mb-4">
    <iframe
      width="100%"
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
  </>
  )
}

export default WatchpageItem