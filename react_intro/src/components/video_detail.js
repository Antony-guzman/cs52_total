import React from 'react';

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>Loading...</div>;
  }
  const { videoId } = video.id; // will give linting error - read it and decide for yourself
  // {videoId} = video.id // is example of destructuring
  const url = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div id="video-detail">
      <iframe src={url} title="video-detail" />
      <div className="details">
        <div>{video.snippet.title}</div>
        <div>{video.snippet.description}</div>
      </div>
    </div>
  );
};

export default VideoDetail;
