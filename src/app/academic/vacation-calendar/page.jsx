const data = [
  {
    serialNo: "০১.",
    name: "*ঈদ-ই-মিলাদুন্নবী (সাঃ)",
    date: "০৪ জানুয়ারি, রবিবার",
    day: "০১ দিন",
  },
  {
    serialNo: "০২.",
    name: "শ্রী শ্রী সরস্বতী পূজা",
    date: "২৫ জানুয়ারি, রবিবার",
    day: "০১ দিন",
  },
  {
    serialNo: "০৩.",
    name: "*ফাতেহা-ই-ইয়াজদাহম",
    date: "০১ ফেব্রুয়ারি, রবিবার",
    day: "০১ দিন",
  },
  {
    serialNo: "০৪.",
    name: "*মাঘী পূর্ণিমা",
    date: "০৩ ফেব্র“য়ারি, মঙ্গলবার",
    day: "০১ দিন",
  },
  {
    serialNo: "০৫.",
    name: "শহিদ দিবস ও আন্তর্জাতিক মাতৃভাষা দিবস",
    date: "২১ ফেব্র“য়ারি, শনিবার",
    day: "০১ দিন",
  },
  {
    serialNo: "০৬.",
    name: "শুভ দোলযাত্রা",
    date: "০৫ মার্চ, বৃহস্পতিবার",
    day: "০১ দিন",
  },
  {
    serialNo: "০৭.",
    name: "জাতির জনক বঙ্গবন্ধু শেখ মুজিবুর রহমানের জন্মদিবস",
    date: "১৭ মার্চ, মঙ্গলবার",
    day: "০১ দিন",
  },
  {
    serialNo: "০৮.",
    name: "স্বাধীনতা ও জাতীয় দিবস",
    date: "২৬ মার্চ, বৃহস্পতিবার",
    day: "০১ দিন",
  },
  {
    serialNo: "০৯.",
    name: "উচ্চ মাধ্যমিক পরীক্ষা, ইস্টার সানডে, বাংলা নববর্ষ ও গ্রীষ্মকালীন অবকাশ",
    date: "০১ এপ্রিল, বুধবার থেকে ১৬ এপ্রিল, বৃহস্পতিবার পর্যন্ত",
    day: "১৪ দিন",
  },
  {
    serialNo: "১০.",
    name: "মে দিবস",
    date: "০১ মে, শুক্রবার",
    day: "০১ দিন",
  },
  {
    serialNo: "১১.",
    name: "*বৌদ্ধ পূর্ণিমা (বৈশাখী পূর্ণিমা)",
    date: "০৩ মে, রবিবার",
    day: "০১ দিন",
  },
  {
    serialNo: "১২.",
    name: "*পবিত্র শব-ই-মেরাজ",
    date: "১৭ মে, রবিবার",
    day: "০১ দিন",
  },
  {
    serialNo: "১৩.",
    name: "*পবিত্র শব-ই-বরাত",
    date: "০৩ জুন, বুধবার",
    day: "০১ দিন",
  },
  {
    serialNo: "১৪.",
    name: "*পবিত্র রমজান, জুমাতুল বিদা, *শবে কদর ও *ঈদ-উল-ফিতর",
    date: "০৫ জুলাই, রবিবার থেকে ২১ জুলাই, মঙ্গলবার পর্যন্ত",
    day: "১৫ দিন",
  },
  {
    serialNo: "১৫.",
    name: "জাতীয় শোক দিবস",
    date: "১৫ আগস্ট, শনিবার",
    day: "০১ দিন",
  },
  {
    serialNo: "১৬.",
    name: "শুভ জন্মাষ্টমী",
    date: "০৫ সেপ্টেম্বর, শনিবার",
    day: "০১ দিন",
  },
  {
    serialNo: "১৭.",
    name: "*পবিত্র ঈদ-উল-আযহা",
    date: "২১ সেপ্টেম্বর, সোমবার থেকে ৩০ সেপ্টেম্বর, বুধবার পর্যন্ত",
    day: "০৯ দিন",
  },
  {
    serialNo: "১৮.",
    name: "*হিজরি নববর্ষ",
    date: "১৫ অক্টোবর, বৃহস্পতিবার",
    day: "০১ দিন",
  },
  {
    serialNo: "১৯.",
    name: "দূর্গা পূজা, *আশুরা, শ্রী শ্রী লক্ষ্মী পূজা",
    date: "২০ অক্টোবর, মঙ্গলবার থেকে ২৭ অক্টেবর মঙ্গলবার পর্যন্ত",
    day: "০৭ দিন",
  },
  {
    serialNo: "২০.",
    name: "শ্রী শ্রী  কালীপূজা/শ্যামা পূজা",
    date: "১০ নভেম্বর, মঙ্গলবার",
    day: "০১ দিন",
  },
  {
    serialNo: "২১.",
    name: "*আখেরি চাহার সোম্বা",
    date: "০৯ ডিসেম্বর, বুধবার",
    day: "০১ দিন",
  },
  {
    serialNo: "২২.",
    name: "বিজয় দিবস, *ঈদ-ই-মিলাদুন্নবী (সাঃ), যীশু খ্রিস্টের জন্মদিন ও শীতকালীন অবকাশ",
    date: "১৬ ডিসেম্বর, বুধবার থেকে ৩১ ডিসেম্বর, বৃহস্পতিবার পর্যন্ত",
    day: "১৪ দিন",
  },
  {
    serialNo: "২৩.",
    name: "প্রতিষ্ঠান প্রধানের সংরক্ষিত ছুটি",
    date: "",
    day: "০৩ দিন",
  },
];

const page = () => {
  return (
    <section>
      <table className="w-full border-collapse border border-[#ddd] text-left text-sm text-dark md:text-base">
        <thead>
          <tr>
            <th className="border border-[#ddd] p-2 font-bold">ক্রঃ নং</th>
            <th className="border border-[#ddd] p-2 font-bold">বিষয়</th>
            <th className="border border-[#ddd] p-2 font-bold">
              অনুমোদিত ছুটির তারিখ ও দিন
            </th>
            <th className="border border-[#ddd] p-2 font-bold">দিনের সংখ্যা</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr
              key={index}
              className="transition-all duration-300 odd:bg-gray-100 hover:bg-gray-100"
            >
              <td className="border border-[#ddd] p-2">{row.serialNo}</td>
              <td className="border border-[#ddd] p-2">{row.name}</td>
              <td className="border border-[#ddd] p-2">{row.date}</td>
              <td className="border border-[#ddd] p-2">{row.day}</td>
            </tr>
          ))}
          <tr className="transition-all duration-300 odd:bg-gray-100 hover:bg-gray-100">
            <td colSpan={3} className="border border-[#ddd] p-2">
              মোট =
            </td>
            <td className="border border-[#ddd] p-2">৭৮ দিন</td>
          </tr>
        </tbody>
      </table>
      <p className="mt-5 text-sm text-gray-500 md:text-base">
        (* চিহ্নিত ছুটির তারিখ চাঁদ দেখার উপর নির্ভরশীল। সাপ্তাহিক ছুটি ০১ (এক)
        দিন, শুক্রবার)
      </p>
    </section>
  );
};

export default page;
