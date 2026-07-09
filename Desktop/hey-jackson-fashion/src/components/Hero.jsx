import homepageVideo from "../assets/homepage-video.mp4";

function Hero() {
  return (
    <section className="banner">
      <video
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      >
        <source src={homepageVideo} type="video/mp4" />
      </video>
    </section>
  );
}

export default Hero;