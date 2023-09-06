const dressCodes = [
  {
    class: "উচ্চ মাধ্যমিক",
    student: "ছাত্র",
    dressCode:
      "প্যান্ট – নেভি ব্লু, সার্ট – সাদা<br>ব্যাজ – কলেজের মনোগ্রাম এবং একাদশ ও দ্বাদশ শ্রেণির পৃথকীকরণ ফিতা সংবলিত ব্যাজ কাঁধে থাকবে<br>ব্যাজের রং- নেভি ব্লু, নেমট্যাগ বাম পাশে কাঁধের নিচে থাকবে, সু – কালো<br>অথবা<br>পাজামা – নেভি ব্লু, পাঞ্জাবি – সাদা, স্যান্ডেল সু – কালো।",
  },
  {
    class: "উচ্চ মাধ্যমিক",
    student: "ছাত্রী",
    dressCode:
      "সালোয়ার – সাদা, টপস – কলারযুক্ত সাদা টপস<br>কামিজ – নেভি ব্লু, ওড়না – সাদা, বেল্ট – নেভি ব্লু<br>পাম্প সু – কালো<br>অথবা<br>বোরখা – নেভি ব্লু, সালোয়ার – সাদা, পাম্প সু – কালো<br>স্কার্ফ – সাদা",
  },
  {
    class: "অনার্স ও পাস কোর্স",
    student: "ছাত্র",
    dressCode:
      "প্যান্ট – কালো, সার্ট – সাদা, সু – কালো<br>অথবা<br>পাজামা – কালো, পাঞ্জাবি – সাদা, স্যান্ডেল সু – কালো",
  },
  {
    class: "অনার্স ও পাস কোর্স",
    student: "ছাত্রী",
    dressCode:
      "সালোয়ার – সাদা, কামিজ – নেভি ব্লু, ওড়না – সাদা<br>পাম্প সু – কালো<br>অথবা<br>বোরখা – নেভি ব্লু, সালোয়ার – সাদা, পাম্প সু – কালো<br>স্কার্ফ – সাদা",
  },
];

const page = () => {
  return (
    <section>
      <table className="mb-3 border-collapse border border-[#ddd] text-left text-sm md:text-base">
        <thead>
          <tr className="transition-all duration-300 hover:bg-gray-100">
            <th className="border border-[#ddd] p-2 font-bold">শ্রেণি</th>
            <th className="border border-[#ddd] p-2 font-bold">শিক্ষার্থী</th>
            <th className="border border-[#ddd] p-2 font-bold">
              পোশাকের নির্দেশনা
            </th>
          </tr>
        </thead>
        <tbody>
          {dressCodes.map((row, index) => (
            <tr
              key={index}
              className="transition-all duration-300 odd:bg-gray-100 hover:bg-gray-100"
            >
              <td className="border border-[#ddd] p-2">{row.class}</td>
              <td className="border border-[#ddd] p-2">{row.student}</td>
              <td
                className="border border-[#ddd] p-2"
                dangerouslySetInnerHTML={{ __html: row.dressCode }}
              />
            </tr>
          ))}
        </tbody>
      </table>
      <p className="text-sm  text-gray-400 md:text-base">
        পোশাক (ইউনিফরম) এর বিবরণ
      </p>
      <p className="mt-5  text-sm text-dark md:text-base">
        বি:দ্র:- শীতকালে প্রয়োজনে সকল শ্রেণির শিক্ষার্থীরা ‘V’ গলাবিশিষ্ট খয়েরী
        রঙের সোয়েটার পরিধান করবে।
      </p>
    </section>
  );
};

export default page;
