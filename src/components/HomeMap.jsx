const HomeMap = () => {
  return (
    <section className="mt-7">
      <h3 className="mb-3 text-3xl font-bold text-dark">Our Location</h3>
      <div className="">
        <iframe
          className="h-[380px] w-full border-0"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3634.3616961786297!2d88.58085731499318!3d24.36871788428829!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fbef1b803cf455%3A0x4a51dc4e8427e58f!2sRajshahi%20New%20Government%20Degree%20College!5e0!3m2!1sen!2sbd!4v1645473782352!5m2!1sen!2sbd"
          allowfullscreen=""
        ></iframe>
      </div>
    </section>
  );
};

export default HomeMap;
