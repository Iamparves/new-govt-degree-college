const vicePrincipals = [
    {
        serialNo: "০১.",
        name: "জনাব মোঃ আফসারুজজামান",
        startDate: "২২-০৯-১৯৭৯",
        endDate: "১৬-০৬-১৯৮০"
    },
    {
        serialNo: "০২.",
        name: "জনাব মোঃ মোসলেম আলী",
        startDate: "২৭-০১-১৯৮২",
        endDate: "০১-০৪-১৯৮৪"
    },
    {
        serialNo: "০৩.",
        name: "জনাব মোঃ ফয়েজ আহমেদ",
        startDate: "২৪-০১-১৯৮৫",
        endDate: "৩০-০৭-১৯৮৬"
    },
    {
        serialNo: "০৪.",
        name: "জনাব মোঃ আহমারুজজামান",
        startDate: "০৩-০৯-১৯৮৬",
        endDate: "০৫-০৮-১৯৯১"
    },
    {
        serialNo: "০৫.",
        name: "জনাব মোঃ মাসুম আলী",
        startDate: "১৮-১২-১৯৯১",
        endDate: "২২-০৭-১৯৯২"
    },
    {
        serialNo: "০৬.",
        name: "জনাব মোঃ আবুল কাসেম তালুকদার",
        startDate: "২২-০৭-১৯৯২",
        endDate: "১২-০৮-১৯৯২"
    },
    {
        serialNo: "০৭.",
        name: "জনাব গোলাম কবির মোঃ নূরুল হুদা",
        startDate: "১২-০৮-১৯৯২",
        endDate: "২৬-১২-১৯৯২"
    },
    {
        serialNo: "০৮.",
        name: "প্রফেসর মোঃ আব্দুল খালেক",
        startDate: "২৬-১২-১৯৯২",
        endDate: "১৫-০২-১৯৯৭"
    },
    {
        serialNo: "০৯.",
        name: "প্রফেসর মোঃ মোজাম্মেল হক",
        startDate: "২৯-০৯-১৯৯৭",
        endDate: "২৯-০৯-১৯৯৭"
    },
    {
        serialNo: "১০.",
        name: "প্রফেসর মোঃ নজরুল ইসলাম",
        startDate: "২০-১২-১৯৯৭",
        endDate: "০৩-১২-২০০০"
    },
    {
        serialNo: "১১.",
        name: "বেগম হেলালুন নাহার মহীউদ্দিন",
        startDate: "১২-০৪-২০০১",
        endDate: "১৮-০৪-২০০১"
    },
    {
        serialNo: "১২.",
        name: "প্রফেসর হাসনা বানু",
        startDate: "১৯-০৪-২০০১",
        endDate: "০৩-১০-২০০১"
    },
    {
        serialNo: "১৩.",
        name: "প্রফেসর মোঃ ইসমাইল হোসেন",
        startDate: "০৭-০৫-২০০২",
        endDate: "২৯-০৬-২০০৩"
    },
    {
        serialNo: "১৪.",
        name: "প্রফেসর ড. মোহাঃ আব্দুর রহমান",
        startDate: "২২-০৭-২০০৩",
        endDate: "৩০-০১-২০০৫"
    },
    {
        serialNo: "১৫.",
        name: "প্রফেসর ড. আহাম্মেদ রেজা",
        startDate: "১৬-০৪-২০০৫",
        endDate: "১৯-০৭-২০০৮"
    },
    {
        serialNo: "১৬.",
        name: "প্রফেসর এ.কে.এম. মনসূর রহমান",
        startDate: "২০-০৮-২০০৮",
        endDate: "২৯-০৯-২০০৮"
    },
    {
        serialNo: "১৭.",
        name: "প্রফেসর মোঃ আজিজুল ইসলাম",
        startDate: "৩০-১২-২০০৮",
        endDate: "৩০-১২-২০০৮"
    },
    {
        serialNo: "১৮.",
        name: "প্রফেসর মোঃ গোলাম হোসেন প্রামাণিক",
        startDate: "০৭-০৭-২০০৯",
        endDate: "২৭-০২-২০১৪"
    },
    {
        serialNo: "১৯.",
        name: "প্রফেসর মোঃ তোজাম্মেল হোসাইন",
        startDate: "১৩-০৭-২০১৪",
        endDate: "০৪-০৬-২০১৫"
    },
    {
        serialNo: "২০.",
        name: "প্রফেসর মোঃ হাবিবুর রহমান",
        startDate: "০৮-০৮-২০১৫",
        endDate: "২৭-১২-২০১৭"
    },
    {
        serialNo: "২১.",
        name: "প্রফেসর মোঃ আব্দুর রাজ্জাক",
        startDate: "০১-০১-২০১৮",
        endDate: "২৭-০২-২০১৮"
    },
    {
        serialNo: "২২.",
        name: " প্রফেসর আশরাফুন নেসা",
        startDate: "২৮-০২-২০১৮",
        endDate: "২৫-০৯-২০১৮"
    },
    {
        serialNo: "২৩.",
        name: "প্রফেসর ড. মোঃ অলীউল আলম",
        startDate: "০৩-১০-২০১৮",
        endDate: "–"
    }
]

export default function page() {
  return (
    <section>
        <table className="border border-collapse border-[#ddd] text-sm md:text-base text-left text-dark w-full">
                <thead>
                    <tr>
                        <th className="font-bold border border-[#ddd] p-2" rowSpan={2}>ক্রমিক নং</th>
                        <th className="font-bold border border-[#ddd] p-2" rowSpan={2}>নাম</th>
                        <th colSpan={2} className="font-bold border border-[#ddd] p-2">কার্যকাল</th>
                    </tr>
                    <tr className="bg-gray-100">
                        <th className="font-bold border border-[#ddd] p-2">আরম্ভ</th>
                        <th className="font-bold border border-[#ddd] p-2">শেষ</th>
                    </tr>
                </thead>
                <tbody>
                    {vicePrincipals.map((row, index) => (
                        <tr key={index} className="even:bg-gray-100 hover:bg-gray-100 transition-all duration-300">
                            <td className="border border-[#ddd] p-2">{row.serialNo}</td>
                            <td className="border border-[#ddd] p-2">{row.name}</td>
                            <td className="border border-[#ddd] p-2">{row.serialNo}</td>
                            <td className="border border-[#ddd] p-2">{row.endDate}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <p className="text-gray-500 mt-3">উপাধ্যক্ষগণের কার্যকালসহ নামের তালিকা</p>
    </section>
  )
}
