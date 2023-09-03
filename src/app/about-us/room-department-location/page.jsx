const buildingOne = [
    {
        floor: "নিচতলা",
        block: "উত্তর ব্লক",
        department: "বিভাগীয় কার্যালয়-রসায়ন বিভাগ (কক্ষ নং-১০৪), রসায়ন ল্যাব (কক্ষ নং-১০২, ১০৩), স্টোর রুম-রসায়ন বিভাগ (কক্ষ নং-১০৫), কর্মচারী সমিতির কার্যালয় (কক্ষ নং-১০৭), শরীরচর্চা বিভাগ (কক্ষ নং-১০৯), শ্রেণিকক্ষ (কক্ষ নং-১০১, ১০৬, ১০৮ ও ১১০)"
    },
    {
        floor: "নিচতলা",
        block: "মধ্য ব্লক",
        department: "শ্রেণিকক্ষ(কক্ষ নং-১১১ থেকে ১১৬ পর্যন্ত), রোভার স্কাউট ডেন (কক্ষ নং-১১৭)"
    },
    {
        floor: "নিচতলা",
        block: "দক্ষিণ ব্লক",
        department: "বিভাগীয় কার্যালয় ও সেমিনার লাইব্রেরি-অর্থনীতি বিভাগ (কক্ষ নং-১১৮,১১৯),বিভাগীয় কার্যালয় ও সেমিনার লাইব্রেরি-হিসাববিজ্ঞান বিভাগ (কক্ষ নং-১২০, ১২১),বিএনসিসি কার্যালয় (কক্ষ নং-১২৩),বিএনসিসি স্টোর রুম (কক্ষ নং-১২৪),বিভাগীয় কার্যালয়-আরবি ও ইসলাম শিক্ষা (কক্ষ নং-১২৫)"
    },
    {
        floor: "দোতলা",
        block: "উত্তর ব্লক",
        department: "শিক্ষক মিলনায়তন (কক্ষ নং-২০৬), বিভাগীয় কার্যালয় ও সেমিনার লাইব্রেরি-বাংলা বিভাগ (কক্ষ নং- ২০৮, ২০৯), বিভাগীয় কার্যালয়-ব্যবস্থাপনা বিভাগ (কক্ষ নং-২১০), নিয়ন্ত্রণ কক্ষ (কক্ষ নং-২০৪), স্টোর রুম (কক্ষ নং-২০২),প্যানট্রি রুম-শিক্ষক মিলনায়তন (কক্ষ নং-২০৫), শ্রেণিকক্ষ (কক্ষ নং-২০১ও২০৩),নামাজ ঘর (কক্ষ নং-২০৭)"
    },
    {
        floor: "দোতলা",
        block: "মধ্য ব্লক",
        department: "অধ্যক্ষের কার্যালয় (কক্ষ নং-২১৭), বিভাগীয় কার্যালয় ও সেমিনার লাইব্রেরি-গণিত বিভাগ (কক্ষ নং-২১৪, ২১৫), আইসিটি ল্যাব (কক্ষ নং-২১৬), পরীক্ষা নিয়ন্ত্রণ কক্ষ-১ (কক্ষ নং-২১৮), শ্রেণিকক্ষ(কক্ষ নং-২১১, ২১২ ও ২১৩)"
    },
    {
        floor: "দোতলা",
        block: "দক্ষিণ ব্লক",
        department: "উপাধ্যক্ষের কার্যালয় (কক্ষ নং-২২২), কলেজ অফিস (কক্ষ নং-২২১), ক্যাশ শাখা (কক্ষ নং-২২৩), একাডেমিক শাখা (কক্ষ নং-২২৪), স্টোর রুম (কক্ষ নং-২২৫), পরীক্ষা নিয়ন্ত্রণ কক্ষ-২ (কক্ষ নং-২২০), ছাত্রী কমনরুম (কক্ষ নং-২১৯)"
    },
    {
        floor: "তিনতলা",
        block: "উত্তর ব্লক",
        department: "কলেজ লাইব্রেরি (পূর্ব পাশে), বিভাগীয় কার্যালয়-ভূগোল ও পরিবেশ বিভাগ (কক্ষ নং-৩০৫), ভূগোল ল্যাব (কক্ষ নং-৩০৪), স্টোর রুম-ভূগোল বিভাগ (কক্ষ নং-৩০২), শ্রেণিকক্ষ(কক্ষ নং-৩০১,৩০৩ ও ৩০৬)"
    },
    {
        floor: "তিনতলা",
        block: "মধ্য ব্লক",
        department: "বিভাগীয় কার্যালয়-উদ্ভিদবিজ্ঞান বিভাগ (কক্ষ নং-৩০৮), উদ্ভিদবিজ্ঞান উচ্চ মাধ্যমিক ল্যাব (কক্ষ নং-৩০৭), বিভাগীয় কার্যালয়-প্রাণিবিদ্যা বিভাগ (কক্ষ নং-৩০৯), প্রাণিবিদ্যা উচ্চ মাধ্যমিক ল্যাব (কক্ষ নং-৩১০), বিভাগীয় কার্যালয়-পদার্থবিজ্ঞান বিভাগ (কক্ষ নং-৩১১), পদার্থবিজ্ঞান উচ্চ মাধ্যমিক ল্যাব (কক্ষ নং-৩১২), স্টোর রুম-পদার্থবিজ্ঞান বিভাগ (কক্ষ নং-৩১৩)"
    },
    {
        floor: "তিনতলা",
        block: "দক্ষিণ ব্লক",
        department: "শ্রেণিকক্ষ (কক্ষ নং- ৩১৪, ৩১৫, ৩১৬), পদার্থবিজ্ঞান অনার্স ল্যাব (কক্ষ নং- ৩১৭, ৩১৮)"
    },
]

const buildingTwo = [
    {
        floor: "নিচতলা",
        block: "",
        department: "বিভাগীয় কার্যালয়-ইতিহাস এবং ইসলামের ইতিহাস ও সংস্কৃতি বিভাগ (কক্ষ নং-১০১), শ্রেণিকক্ষ(কক্ষ নং-১০২)"
    },
    {
        floor: "দোতলা",
        block: "",
        department: "বিভাগীয় কার্যালয় ও সেমিনার লাইব্রেরি-দর্শন (কক্ষ নং-২০১), বিভাগীয় কার্যালয় ও সেমিনার লাইব্রেরি-ইংরেজি (কক্ষ নং-২০৩) বিভাগীয় কার্যালয় ও সেমিনার লাইব্রেরি-রাষ্ট্রবিজ্ঞান বিভাগ (কক্ষ নং-২০২)"
    },
    {
        floor: "তিনতলা",
        block: "",
        department: "উদ্ভিববিজ্ঞান অনার্স ল্যাব (কক্ষ নং-৩০২), প্রাণিবিদ্যা অনার্স ল্যাব (কক্ষ নং-৩০৩), অতিথি কক্ষ (কক্ষ নং-৩০১)"
    },
    {
        floor: "চারতলা",
        block: "",
        department: "শ্রেণিকক্ষ (কক্ষ নং-৪০১, ৪০২)"
    },
]

const page = () => {
  return (
    <section>
        <div className="mb-8">
            <table className="border border-collapse border-[#ddd] text-[15px] md:text-base text-left">
                <thead>
                    <tr>
                        <th className="font-bold border border-[#ddd] p-2">তলা</th>
                        <th className="font-bold border border-[#ddd] p-2">ব্লক</th>
                        <th className="font-bold border border-[#ddd] p-2">কার্যালয় ও বিভাগের অবস্থান</th>
                    </tr>
                </thead>
                <tbody>
                    {buildingOne.map((row, index) => (
                        <tr key={index} className="even:bg-gray-100 hover:bg-gray-100 transition-all duration-300">
                            <td className="border border-[#ddd] p-2">{row.floor}</td>
                            <td className="border border-[#ddd] p-2">{row.block}</td>
                            <td className="border border-[#ddd] p-2">{row.department}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <p className="text-gray-500 mt-3">একাডেমিক ভবন – ১</p>
        </div>
        <div className="mb-8">
            <table className="border border-collapse border-[#ddd] text-[15px] md:text-base text-left">
            <thead>
                    <tr>
                        <th className="font-bold border border-[#ddd] p-2">তলা</th>
                        <th className="font-bold border border-[#ddd] p-2">ব্লক</th>
                        <th className="font-bold border border-[#ddd] p-2">কার্যালয় ও বিভাগের অবস্থান</th>
                    </tr>
                </thead>
                <tbody>
                    {buildingTwo.map((row, index) => (
                        <tr key={index} className="even:bg-gray-100 hover:bg-gray-100 transition-all duration-300">
                            <td className="border border-[#ddd] p-2">{row.floor}</td>
                            <td className="border border-[#ddd] p-2">{row.block}</td>
                            <td className="border border-[#ddd] p-2">{row.department}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <p className="text-gray-500 mt-3">একাডেমিক ভবন – ২</p>
        </div>
        <hr/>
    </section>
  )
}

export default page