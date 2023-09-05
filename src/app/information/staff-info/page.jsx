const table1 = [
    {
        serialNo: "০১.",
        name: "মোঃ আব্দুর রাজ্জাক, অফিস সহকারী কাম মুদ্রাক্ষরিক",
        mobileNo: "০১৯১৮৮৩৬৯২২",
        division: "অফিস"
    },
    {
        serialNo: "০২.",
        name: "মোঃ আব্দুল আজিজ, অফিস সহকারী কাম কম্পিউটার অপারেটর",
        mobileNo: "০১৯১১১৩৫০৩৫",
        division: "অফিস"
    },
    {
        serialNo: "০৩.",
        name: "মোঃ খোরশেদুল ইসলাম, মেকানিক কাম ইলেকট্রিশিয়ান",
        mobileNo: "০১৭১৬৩০৬৭৩৩",
        division: "একাডেমিক শাখা"
    }
]

const table2 = [
    {
        serialNo: "০১.",
        name: "মোঃ গোলাম রসুল, বুক সর্টার",
        mobileNo: "০১৭১৮২১৯৯৮৬",
        division: "একাডেমিক শাখা"
    },
    {
        serialNo: "০২.",
        name: "কাজল বেগম, এমএলএসএস",
        mobileNo: "০১৭৮১৫৪৯৬২০",
        division: "অফিস"
    },
    {
        serialNo: "০৩.",
        name: "মোঃ আবুল খায়ের, এমএলএসএস",
        mobileNo: "০১৭১০৩৫৮৭১৮",
        division: "উদ্ভিদবিজ্ঞান বিভাগ"
    },
    {
        serialNo: "০৪.",
        name: "মোঃ আব্দুস সাত্তার, এমএলএসএস",
        mobileNo: "০১৭৪৮৬০৯৪৬২",
        division: "অধ্যক্ষের কক্ষ"
    },
    {
        serialNo: "০৫.",
        name: "মোঃ শহিদুল হক, এমএলএসএস",
        mobileNo: "০১৬৭৪৭৮২২৯৩",
        division: "ব্যবস্থাপনা বিভাগ"
    },
    {
        serialNo: "০৬.",
        name: "মোঃ সাইদুল ইসলাম, এমএলএসএস",
        mobileNo: "",
        division: "একাডেমিক শাখা"
    },
    {
        serialNo: "০৭.",
        name: "মোঃ কছিম উদ্দিন, এমএলএসএস",
        mobileNo: "",
        division: "নাইট গার্ড"
    },
    {
        serialNo: "০৮.",
        name: "মোঃ আনোয়ার হোসেন, এমএলএসএস",
        mobileNo: "০১৯২২৮৩৩৫৮৪",
        division: "পদার্থবিজ্ঞান বিভাগ"
    },
    {
        serialNo: "০৯.",
        name: "ইসলাম শেখ, এমএলএসএস",
        mobileNo: "০১১৯১৫০০৮২৪",
        division: "শিক্ষক মিলনায়তন"
    },
    {
        serialNo: "১০.",
        name: "মোঃ রফিকুল ইসলাম, এমএলএসএস",
        mobileNo: "০১১৯৩২২০৮২০",
        division: "নাইট গার্ড"
    },
    {
        serialNo: "১১.",
        name: "মোসাঃ আফরোজা বেগম (বেলী), এমএলএসএস",
        mobileNo: "০১৭৩৭২১৪১৫২",
        division: "ছাত্রী কমনরুম"
    },
    {
        serialNo: "১২.",
        name: "মোঃ জাহাঙ্গীর আলম, সুইপার",
        mobileNo: "০১৯২২৮৩৩৫১০",
        division: "দারোয়ান"
    }
]

const page = () => {
  return (
    <section className="pb-5 border-b border-[#ddd]">
        <div className="mb-10">
            <table className="border border-collapse border-[#ddd] text-sm md:text-base text-left text-dark w-full">
                <thead>
                    <tr>
                        <th className="font-bold border border-[#ddd] p-2">ক্রমিক নং</th>
                        <th className="font-bold border border-[#ddd] p-2">নাম ও পদবী</th>
                        <th className="font-bold border border-[#ddd] p-2">মোবাইল নম্বর</th>
                        <th className="font-bold border border-[#ddd] p-2">সংযুক্ত</th>
                    </tr>
                </thead>
                <tbody>
                    {table1.map((row, index) => (
                        <tr key={index} className="even:bg-gray-100 hover:bg-gray-100 transition-all duration-300">
                            <td className="border border-[#ddd] p-2">{row.serialNo}</td>
                            <td className="border border-[#ddd] p-2">{row.name}</td>
                            <td className="border border-[#ddd] p-2">{row.mobileNo}</td>
                            <td className="border border-[#ddd] p-2">{row.division}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <p className="text-gray-500 text-sm md:text-base mt-3">তৃতীয় শ্রেণির (রাজস্ব) কর্মচারীবৃন্দের তালিকা</p>
        </div>
        <div className="mb-10">
            <table className="border border-collapse border-[#ddd] text-sm md:text-base text-left text-dark w-full">
                <thead>
                    <tr>
                        <th className="font-bold border border-[#ddd] p-2">ক্রমিক নং</th>
                        <th className="font-bold border border-[#ddd] p-2">নাম ও পদবী</th>
                        <th className="font-bold border border-[#ddd] p-2">মোবাইল নম্বর</th>
                        <th className="font-bold border border-[#ddd] p-2">সংযুক্ত</th>
                    </tr>
                </thead>
                <tbody>
                    {table2.map((row, index) => (
                        <tr key={index} className="even:bg-gray-100 hover:bg-gray-100 transition-all duration-300">
                            <td className="border border-[#ddd] p-2">{row.serialNo}</td>
                            <td className="border border-[#ddd] p-2">{row.name}</td>
                            <td className="border border-[#ddd] p-2">{row.mobileNo}</td>
                            <td className="border border-[#ddd] p-2">{row.division}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <p className="text-gray-500 text-sm md:text-base mt-3">তৃতীয় শ্রেণির (রাজস্ব) কর্মচারীবৃন্দের তালিকা</p>
        </div>
        <p>* এমএলএসএস (MLSS): Member of the Lowest Sub-ordinate Staff.</p>
      </section>
  )
}

export default page