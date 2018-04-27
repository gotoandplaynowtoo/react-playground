import React from 'react';
import VideoListItem from './VideoListItem';

const VideoList = (props) => {
  const { videos } = props;

  return (
    <ul className="col-md-4 list-group">
      {videos.map(video => 
        <VideoListItem 
          key={video.etag}
          video={video}
        />
      )}
    </ul>
  );
};

export default VideoList;