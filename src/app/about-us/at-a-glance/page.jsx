const data = [
    {
        title: "কলেজের নাম",
        data: "নিউ গভঃ ডিগ্রী কলেজ, রাজশাহী<br/>New Govt. Degree College, Rajshahi"
    },
    {
        title: "ওয়েব অ্যাড্রেস",
        data: "www.ngdc-raj.ac.bd, www.ngdc.ac.bd"
    },
    {
        title: "ই-মেইল",
        data: "ngdcrajbd@yahoo.com"
    },
    {
        title: "কলেজ কোড",
        data: "২৫০৬ (জাতীয় বিশ্ববিদ্যালয়)<br/>১০২৫ (মাধ্যমিক ও উচ্চ মাধ্যমিক শিক্ষা বোর্ড, রাজশাহী)<br/>০১৩৮ (মাধ্যমিক ও উচ্চ শিক্ষা অধিদপ্তর, ঢাকা)<br/>৫৮১২২৫২০৪ (ব্যানবেইস, ঢাকা)<br/>১২৭০৩৮ (EIIN-Educational Institution Index Number)"
    },
    {
        title: "কেন্দ্র কোড",
        data: "১০১ (উচ্চ মাধ্যমিক পরীক্ষা)"
    },
    {
        title: "অবস্থান",
        data: "নাটোর রোড সংলগ্ন , সি এন্ড বি মোড়ের পূর্বে"
    },
    {
        title: "প্রতিষ্ঠাকাল",
        data: "১৯৬৬ খ্রি."
    },
    {
        title: "জমির পরিমাণ",
        data: "৮.০৭৯৯ একর"
    },
    {
        title: "মৌজা",
        data: "কাজীহাটা ও শ্রীরামপুর"
    },
    {
        title: "ওয়ার্ড নং",
        data: "০৮"
    },
    {
        title: "থানা",
        data: "রাজপাড়া"
    },
    {
        title: "পোস্ট কোড",
        data: "জিপিও-৬০০০"
    },
    {
        title: "বিভাগের সংখ্যা",
        data: "১৬"
    },
    {
        title: "অর্নাস পাঠদানকারী বিভাগের সংখ্যা",
        data: "১৫ (আরও ১টি বিভাগে অনার্স কোর্স প্রবর্তনের বিষয়টি প্রক্রিয়াধীন)"
    },
    {
        title: "ছাত্র-ছাত্রীর সংখ্যা",
        data: "প্রায় ১২,০০০ হাজার"
    },
    {
        title: "শিক্ষকের সৃষ্ট পদ সংখ্যা",
        data: "৭০ (অধ্যক্ষ ও উপাধ্যক্ষসহ), গ্রন্থাগারিক-০১, প্রদর্শক- ০৪, শরীরচর্চা শিক্ষক-০১, সহকারী গ্রন্থাগারিক- ০১"
    },
    {
        title: "কর্মরত শিক্ষকের সংখ্যা",
        data: "৬৯ (সংযুক্ত কর্মকর্তা ০৩ জনসহ), গ্রন্থাগারিক-০১, প্রদর্শক- ০১, শরীরচর্চা শিক্ষক-০১, সহকারী গ্রন্থাগারিক-০১"
    },
    {
        title: "নতুন পদ সৃষ্টির চাহিদা (প্রক্রিয়াধীন)",
        data: "প্রফেসর-১৩, সহযোগী অধ্যাপক-০৮, সহকারী অধ্যাপক-১৭, প্রভাষক-০৮, প্রদর্শক-১০"
    },
    {
        title: "কর্মচারীদের সৃষ্ট পদ সংখ্যা",
        data: "তৃতীয় শ্রেণি-০৮, চতুর্থ শ্রেণি-২২"
    },
    {
        title: "কর্মরত কর্মচারীদের সংখ্যা",
        data: "তৃতীয় শ্রেণি- ০৩, চতুর্থ শ্রেণি- ১২, মাস্টাররোল কর্মচারী- ৫৩"
    },
    {
        title: "একাডেমিক ভবন",
        data: "০২"
    },
    {
        title: "অধ্যক্ষের বাসভবন",
        data: "০১"
    },
    {
        title: "ছাত্রাবাস",
        data: "০২"
    },
    {
        title: "ছাত্রীনিবাস",
        data: "০১"
    },
    {
        title: "কেন্দ্রীয় লাইব্রেরি",
        data: "০১"
    },
    {
        title: "বিভাগীয় সেমিনার লাইব্রেরি",
        data: "১৫"
    },
    {
        title: "বিএনসিসি কার্যালয়",
        data: "০১"
    },
    {
        title: "রোভার ডেন",
        data: "০১"
    },
    {
        title: "রেডক্রিসেন্ট কার্যালয়",
        data: "০১"
    },
    {
        title: "ছাত্র কমনরুম",
        data: "০১"
    },
    {
        title: "ছাত্রী কমনরুম",
        data: "০১"
    },
    {
        title: "শহিদমিনার",
        data: "০১"
    },
    {
        title: "অডিটরিয়াম",
        data: "০১"
    },
    {
        title: "সাইকেল গ্যারেজ",
        data: "০১"
    },
    {
        title: "খেলার মাঠ",
        data: "০১"
    },
    {
        title: "শিক্ষক মিলনায়তন",
        data: "০১"
    },
    {
        title: "পরীক্ষা নিয়ন্ত্রণ কক্ষ",
        data: "০২"
    },
    {
        title: "স্টোর রুম",
        data: "০১"
    },
    {
        title: "কর্মচারী সমিতির কার্যালয়",
        data: "০১"
    },
]

const page = () => {
  return (
    <section>
        <h3 className="text-3xl mb-5 font-bold">At a glance</h3>
        <table className="border border-collapse border-[#ddd] text-[15px] md:text-base">
            <tbody>
                {data.map((row, index) => (
                    <tr key={index} className="even:bg-gray-100 hover:bg-gray-100 transition-all duration-300">
                        <td className="border border-[#ddd] p-2">{row.title}</td>
                        <td className="border border-[#ddd] p-2">:</td>
                        <td className="border border-[#ddd] p-2" dangerouslySetInnerHTML={{__html: row.data}} />
                    </tr>
                ))}
            </tbody>
        </table>
    </section>
  )
}

export default page