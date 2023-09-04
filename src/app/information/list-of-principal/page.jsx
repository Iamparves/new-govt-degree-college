const principals = [
    {
        serialNo: "০১.",
        name: "প্রফেসর ড. মোঃ শামসুদ্দিন মিয়া",
        startDate: "১৫-০৮-১৯৬৫",
        endDate: "০৫-০৯-১৯৬৮"
    },
    {
        serialNo: "০২.",
        name: "প্রফেসর এ.কে.এম. হায়দার হোসেন",
        startDate: "০৫-০৫-১৯৭০",
        endDate: "০৩-০৭-১৯৭৬"
    },
    {
        serialNo: "০৩.",
        name: "প্রফেসর মোঃ লুৎফুর রাহমান",
        startDate: "০৬-০৯-১৯৭৬",
        endDate: "২৫-০৯-১৯৭৯"
    },
    {
        serialNo: "০৪.",
        name: "প্রফেসর এ.এ. আজিজুল্লাহ",
        startDate: "১১-১০-১৯৭৯",
        endDate: "৩০-০১-১৯৮০"
    },
    {
        serialNo: "০৫.",
        name: "প্রফেসর ড. মোঃ আবুল কাশেম",
        startDate: "১৩-০৬-১৯৮০",
        endDate: "১০-০২-১৯৮২"
    },
    {
        serialNo: "০৬.",
        name: "প্রফেসর মোঃ গোলাম ইদ্রিস খান",
        startDate: "১১-০২-১৯৮২",
        endDate: "৩০-১০-১৯৮৩"
    },
    {
        serialNo: "০৭.",
        name: "প্রফেসর মোঃ বেলায়েত আলী",
        startDate: "১৯-০৩-১৯৮৪",
        endDate: "৩১-০৮-১৯৮৬"
    },
    {
        serialNo: "০৮.",
        name: "প্রফেসর গাজী আব্দুস সালাম",
        startDate: "৩০-১১-১৯৮৬",
        endDate: "২০-০৭-১৯৮৭"
    },
    {
        serialNo: "০৯.",
        name: "প্রফেসর মোঃ মোসলেম আলী",
        startDate: "৩০-১১-১৯৮৭",
        endDate: "৩১-০৩-১৯৮৯"
    },
    {
        serialNo: "১০.",
        name: "প্রফেসর মোঃ আব্দুল মজিদ",
        startDate: "০১-০৪-১৯৮৯",
        endDate: "০৩-০৭-১৯৯৩"
    },
    {
        serialNo: "১১.",
        name: "প্রফেসর ড. সফিউর রহমান",
        startDate: "০৩-০৮-১৯৯৩",
        endDate: "১৫-১১-১৯৯৩"
    },
    {
        serialNo: "১২.",
        name: "প্রফেসর মুহম্মদ আমিনুর রাহমান",
        startDate: "১৫-১১-১৯৯৩",
        endDate: "০৫-১০-১৯৯৬"
    },
    {
        serialNo: "১৩.",
        name: "প্রফেসর মোঃ যোবদুল হক",
        startDate: "০৯-১০-১৯৯৬",
        endDate: "০৮-১১-২০০০"
    },
    {
        serialNo: "১৪.",
        name: "প্রফেসর মোঃ নজরুল ইসলাম",
        startDate: "০৩-১২-২০০০",
        endDate: "৩০-১০-২০০১"
    },
    {
        serialNo: "১৫.",
        name: "প্রফেসর মোঃ গোলাম মুর্তজা হোসাইন",
        startDate: "০২-০৪-২০০২",
        endDate: "২৯-০৬-২০০২"
    },
    {
        serialNo: "১৬.",
        name: "প্রফেসর রাজিয়া বেগম",
        startDate: "২৬-০৮-২০০২",
        endDate: "২৭-০২-২০০৩"
    },
    {
        serialNo: "১৭.",
        name: "প্রফেসর এ.বি.এম. বজলুল করীম",
        startDate: "০৬-০৩-২০০৩",
        endDate: "২৪-১১-২০০৪"
    },
    {
        serialNo: "১৮.",
        name: "প্রফেসর মোঃ সাইফুল ইসলাম",
        startDate: "১৯-০১-২০০৫",
        endDate: "৩০-০১-২০০৫"
    },
    {
        serialNo: "১৯.",
        name: "প্রফেসর ড. কে. এন. শাহজাহান করিম",
        startDate: "১৭-০৪-২০০৫",
        endDate: "০২-০৫-২০০৫"
    },
    {
        serialNo: "২০.",
        name: "প্রফেসর ড.আলী রেজা মুহম্মদ আব্দুল মজিদ",
        startDate: "০২-০৫-২০০৫",
        endDate: "১৭-০৭-২০০৮"
    },
    {
        serialNo: "২১.",
        name: "প্রফেসর ড. ফরিদা সুলতানা",
        startDate: "১৭-০৭-২০০৮",
        endDate: "২৬-০৭-২০১০"
    },
    {
        serialNo: "২২.",
        name: "প্রফেসর মোঃ আব্দুল ওয়াহেদ সরকার",
        startDate: "১৯-০৩-২০১১",
        endDate: "১৯-০৮-২০১৪"
    },
    {
        serialNo: "২৩.",
        name: "প্রফেসর এস.এম. জার্জিস কাদির",
        startDate: "০১-০৪-২০১৫",
        endDate: "০৭-০৪-২০২০"
    },
    {
        serialNo: "২৪.",
        name: "প্রফেসর ড. মোসাঃ আবেদা সুলতানা",
        startDate: "০৬-০২-২০২১",
        endDate: "০১-০৪-২০২১"
    },
    {
        serialNo: "২৫.",
        name: "প্রফেসর কালাচাঁদ শীল",
        startDate: "০৫-১০-২০২১",
        endDate: ""
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
                    {principals.map((row, index) => (
                        <tr key={index} className="even:bg-gray-100 hover:bg-gray-100 transition-all duration-300">
                            <td className="border border-[#ddd] p-2">{row.serialNo}</td>
                            <td className="border border-[#ddd] p-2">{row.name}</td>
                            <td className="border border-[#ddd] p-2">{row.serialNo}</td>
                            <td className="border border-[#ddd] p-2">{row.endDate}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <p className="text-gray-500 mt-3">প্রতিষ্ঠাকাল থেকে অধ্যক্ষগণের কার্যকালসহ নামের তালিকা</p>
    </section>
  )
}
