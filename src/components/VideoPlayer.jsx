export default function VideoPlayer({ src, poster }) {
  return (
    <div className="absolute inset-0 w-full h-full">
      <div className="absolute inset-0 bg-brand-black/40 z-10"></div> 
      <video
        autoPlay
        muted
        loop
        playsInline
        poster={poster} // This shows the JPG while the MP4 loads
        className="w-full h-full object-cover"
      >
        <source src={src} type="video/mp4" />
      </video>
    </div>
  );
}