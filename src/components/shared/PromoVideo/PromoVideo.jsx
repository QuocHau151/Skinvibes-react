export const PromoVideo = ({ play, videoUrl, onVideoPlay, image }) => {
  return (
    <>
      <img src={image} className='js-img' alt='' />
      <iframe
        autoPlay
        src={"https://www.youtube.com/watch?v=MjLav0jxH-g&ab_channel=NoBSBeauty"}
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope'
      ></iframe>
      {!play && (
        <div className='info-blocks__item-img-overlay'>
          <span>About Level Serum</span>
          <div onClick={onVideoPlay} className='info-blocks__item-img-play'>
            <img src='/assets/img/play-btn.png' className='js-img' alt='' />
          </div>
        </div>
      )}
    </>
  );
};
