const VideoThumbnails = ({ image, title }) =>{
    return (
      <div className="video-thumbnail">
        <img src={image} alt={`Thumbnail for ${title}`} className="video-thumbnail-image" />
        <h3 className="video-thumbnail-title">{title}</h3>
      </div>
    );
  }
  
  export default VideoThumbnails;