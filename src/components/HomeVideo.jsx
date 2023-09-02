const HomeVideo = () => {
  return (
    <section className="mt-7">
      <h3 className="mb-3 text-3xl font-bold text-dark">Recent Video</h3>
      <div className="grid grid-cols-1 gap-7 md:grid-cols-2">
        <iframe
          width="100%"
          height="270"
          src="https://www.youtube.com/embed/GVPJHDp29tg?si=zuuaH4239qdKIGJN"
          title="YouTube video player"
          allowFullScreen
        ></iframe>
        <iframe
          width="100%"
          height="270"
          src="https://www.youtube.com/embed/l7G3TPz6P24?si=gOlFeCjy22HwqcJs"
          title="YouTube video player"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
};

export default HomeVideo;
