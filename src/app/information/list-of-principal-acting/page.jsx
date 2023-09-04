const actingPrincipals = [
    {
        serialNo: "০১.",
        name: "জনাব মোঃ আনওয়ার হোসেন",
        startDate: "১৯৬৮",
        endDate: "১৯৭০"
    },
    {
        serialNo: "০২.",
        name: "প্রফেসর মোঃ আফসারুজ্জামান",
        startDate: "৩১-০১-১৯৮০",
        endDate: "১২-০৬-১৯৮০"
    },
    {
        serialNo: "০৩.",
        name: "প্রফেসর মোঃ আব্দুল খালেক",
        startDate: "০৩-০৭-১৯৯৩",
        endDate: "০২-০৮-১৯৯৩"
    },
    {
        serialNo: "০৪.",
        name: "প্রফেসর মোঃ নজরুল ইসলাম",
        startDate: "০৮-১১-২০০০",
        endDate: "০৩-১২-২০০০"
    },
    {
        serialNo: "০৫.",
        name: "প্রফেসর মুহম্মদ ইকবাল",
        startDate: "৩০-১০-২০০১",
        endDate: "০২-০৪-২০০২"
    },
    {
        serialNo: "০৬.",
        name: "প্রফেসর মোঃ ইসমাইল হোসেন",
        startDate: "০১-০৭-২০০২",
        endDate: "২৬-০৮-২০০২"
    },
    {
        serialNo: "০৭.",
        name: "প্রফেসর মোঃ ইসমাইল হোসেন",
        startDate: "২৭-০২-২০০৩",
        endDate: "০৬-০৩-২০০৩"
    },
    {
        serialNo: "০৮.",
        name: "প্রফেসর ড. মোহাঃ আব্দুর রহমান",
        startDate: "২৪-১১-২০০৪",
        endDate: "১৯-০১-২০০৫"
    },
    {
        serialNo: "০৯.",
        name: "প্রফেসর নূরুন নাহার পারভীন বানু",
        startDate: "৩১-০১-২০০৫",
        endDate: "১৭-০৪-২০০৫"
    },
    {
        serialNo: "১০.",
        name: "প্রফেসর মোঃ গোলাম হোসেন প্রামাণিক",
        startDate: "২৬-০৭-২০১০",
        endDate: "১৯-০৩-২০১১"
    },
    {
        serialNo: "১১.",
        name: "প্রফেসর মোঃ তোজাম্মেল হোসাইন",
        startDate: "২০-০৮-২০১৪",
        endDate: "৩১-০৩-২০১৫"
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
                      {actingPrincipals.map((row, index) => (
                          <tr key={index} className="even:bg-gray-100 hover:bg-gray-100 transition-all duration-300">
                              <td className="border border-[#ddd] p-2">{row.serialNo}</td>
                              <td className="border border-[#ddd] p-2">{row.name}</td>
                              <td className="border border-[#ddd] p-2">{row.serialNo}</td>
                              <td className="border border-[#ddd] p-2">{row.endDate}</td>
                          </tr>
                      ))}
                  </tbody>
              </table>
              <p className="text-gray-500 mt-3">ভারপ্রাপ্ত অধ্যক্ষগণের কার্যকালসহ নামের তালিকা</p>
      </section>
    )
  }
  