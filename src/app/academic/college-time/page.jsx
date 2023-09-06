const data = [
  {
    title: "অফিস",
    data: "	সকাল ৯:০০টা থেকে বিকেল ৫:০০টা পর্যন্ত (সাপ্তাহিক ও সরকারি ছুটির দিন ব্যতীত)",
  },
  {
    title: "কলেজ লাইব্রেরি",
    data: "অফিস সময়ের অনুরূপ",
  },
  {
    title: "ক্লাস সময়",
    data: "সকাল ৮:৪৫মি. থেকে বেলা ১:৩০মি. পর্যন্ত ও বেলা ২:০০টা থেকে ৪:০০টা পর্যন্ত",
  },
  {
    title: "ক্লাস বিরতি",
    data: "বেলা ১:৩০মি. থেকে ২:০০টা পর্যন্ত",
  },
];

const page = () => {
  return (
    <section className="text-sm text-dark md:text-base">
      <table className="w-full border-collapse border border-[#ddd]">
        <tbody>
          {data.map((row, index) => (
            <tr
              key={index}
              className="transition-all duration-300 even:bg-gray-100 hover:bg-gray-100"
            >
              <td className="border border-[#ddd] p-2">{row.title}</td>
              <td className="border border-[#ddd] p-2">:</td>
              <td
                className="border border-[#ddd] p-2"
                dangerouslySetInnerHTML={{ __html: row.data }}
              />
            </tr>
          ))}
        </tbody>
      </table>
      <p className="mt-2.5 text-gray-500">কলেজ কার্যক্রমের সময়সূচি</p>
    </section>
  );
};

export default page;
