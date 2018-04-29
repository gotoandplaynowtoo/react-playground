import React from 'react';
import VideoListItem from './VideoListItem';

const VideoList = (props) => {
  const { 
    videos,
    onVideoSelect
  } = props;

  return (
    <ul className="list-group">
      {videos.map(video => 
        <VideoListItem 
          onVideoSelect={onVideoSelect}
          key={video.etag}
          video={video}
        />
      )}
    </ul>
  );
};

export default VideoList;