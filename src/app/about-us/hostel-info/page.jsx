const intermediate = [
    {
        division: "মানবিক শাখা",
        number: "৩০০ (২ সেকশন)"
    },
    {
        division: "বিজ্ঞান শাখা",
        number: "৬০০ (৪ সেকশন)"
    },
    {
        division: "ব্যবসায় শিক্ষা শাখা",
        number: "৩০০ (২ সেকশন)"
    },
    {
        division: "মোট",
        number: "১২০০"
    },
]

const honours = [
    {
        subject: "বাংলা",
        number: "১০০"
    },
    {
        subject: "ইংরেজি",
        number: "১০০"
    },
    {
        subject: "ইসলামের ইতিহাস ও সংস্কৃতি",
        number: "১০০"
    },
    {
        subject: "অর্থনীতি",
        number: "১৫০"
    },
    {
        subject: "রাষ্ট্রবিজ্ঞান",
        number: "১০০"
    },
    {
        subject: "ইতিহাস",
        number: "১০০"
    },
    {
        subject: "দর্শন",
        number: "১০০"
    },
    {
        subject: "পদার্থবিজ্ঞান",
        number: "৯৫"
    },
    {
        subject: "রসায়ন",
        number: "৯৫"
    },
    {
        subject: "গণিত",
        number: "১১৫"
    },
    {
        subject: "উদ্ভিদবিজ্ঞান",
        number: "১১৫"
    },
    {
        subject: "প্রাণিবিদ্যা",
        number: "১১৫"
    },
    {
        subject: "ভূগোল ও পরিবেশ",
        number: "৯৫"
    },
    {
        subject: "হিসাববিজ্ঞান",
        number: "২০০"
    },
    {
        subject: "ব্যবস্থাপনা",
        number: "২০০"
    },
    {
        subject: "মোট",
        number: "১৭৮০"
    },
]

const page = () => {
  return (
    <section>
        <div className="mb-10">
            <table className="w-full border border-collapse border-[#ddd] text-[15px] md:text-base">
                <tbody>
                    {intermediate.map((row, index) => (
                        <tr key={index} className="even:bg-gray-100 hover:bg-gray-100 transition-all duration-300">
                            <td className="border border-[#ddd] p-2">{row.division}</td>
                            <td className="border border-[#ddd] p-2">{row.number}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <p className="text-gray-500 mt-3">উচ্চ মাধ্যমিক শ্রেণির আসন সংখ্যা</p>
        </div>
        <div className="mb-8">
            <table className="w-full border border-collapse border-[#ddd] text-[15px] md:text-base">
                <tbody>
                    {honours.map((row, index) => (
                        <tr key={index} className="even:bg-gray-100 hover:bg-gray-100 transition-all duration-300">
                            <td className="border border-[#ddd] p-2">{row.subject}</td>
                            <td className="border border-[#ddd] p-2">{row.number}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <p className="text-gray-500 mt-3">অনার্স শ্রেণির আসন সংখ্যা</p>
        </div>
        <hr/>
    </section>
  )
}

export default page