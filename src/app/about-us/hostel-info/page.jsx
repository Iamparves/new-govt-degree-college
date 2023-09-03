const page = () => {
  return (
    <section>
        <h2 className="font-bold text-center mb-4">ছাত্রাবাস ও ছাত্রীনিবাসের প্রশাসনিক কাঠামো ও আসন সংখ্যা</h2>
        <div className="mb-10">
            <table className="w-full border border-collapse border-[#ddd] text-[15px] md:text-base text-left">
                <thead>
                    <tr>
                        <th className="font-bold border border-[#ddd] p-2">হোস্টেলের নাম</th>
                        <th className="font-bold border border-[#ddd] p-2">আসন সংখ্যা</th>
                        <th className="font-bold border border-[#ddd] p-2">তত্ত্বাবধায়কগণের নাম ও মোবাইল নম্বর</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="even:bg-gray-100 hover:bg-gray-100 transition-all duration-300">
                        <td className="border border-[#ddd] p-2">শামসুদ্দিন ছাত্রাবাস</td>
                        <td className="border border-[#ddd] p-2">২১০</td>
                        <td className="border border-[#ddd] p-2">
                            <b>তত্ত্বাবধায়ক:</b> মোঃ আবু সাঈদ, প্রভাষক, দর্শন বিভাগ<br />
                            <b>মোবাইল:</b> ০১৭১২-৯৭৮৮৮৬<br /><br />
                            <b>সহকারী তত্ত্বাবধায়ক:</b> মোঃ জহুরুল ইসাম, প্রভাষক, রাষ্ট্রবিজ্ঞান বিভাগ<br />
                            <b>মোবাইল:</b> ০১৭১৭-৮৪১২৮৫
                        </td>
                    </tr>
                    <tr className="even:bg-gray-100 hover:bg-gray-100 transition-all duration-300">
                        <td className="border border-[#ddd] p-2">হায়দার হোসেন হোস্টেল</td>
                        <td className="border border-[#ddd] p-2">১০৪</td>
                        <td className="border border-[#ddd] p-2">
                            <b>তত্ত্বাবধায়ক:</b> ড. মোঃ শাহাদাত হোসেন সরকার , সহযোগী অধ্যাপক, ইতিহাস বিভাগ<br />
                            <b>মোবাইল:</b> ০১৭২৫-৮৭৩২৫৭<br /><br />
                            <b>সহকারী তত্ত্বাবধায়ক:</b> মোঃ শফিকুল ইসলাম, শরীরচর্চা বিভাগ<br />
                            <b>মোবাইল:</b> ০১৭১২-২৬৫৯২৮
                        </td>
                    </tr>
                </tbody>
            </table>
            <p className="text-gray-500 mt-3">ছাত্রাবাস</p>
        </div>
        <div className="mb-8">
            <table className="w-full border border-collapse border-[#ddd] text-[15px] md:text-base text-left">
                <thead>
                    <tr>
                        <th className="font-bold border border-[#ddd] p-2">হোস্টেলের নাম</th>
                        <th className="font-bold border border-[#ddd] p-2">আসন সংখ্যা</th>
                        <th className="font-bold border border-[#ddd] p-2">তত্ত্বাবধায়কগণের নাম ও মোবাইল নম্বর</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="even:bg-gray-100 hover:bg-gray-100 transition-all duration-300">
                        <td className="border border-[#ddd] p-2">মেইন বিল্ডিং</td>
                        <td className="border border-[#ddd] p-2">৭৬</td>
                        <td rowSpan={4} className="border border-[#ddd] p-2">
                            <b>তত্ত্বাবধায়ক:</b> ড. মোঃ আব্দুল মালেক, সহকারী অধ্যাপক, অর্থনীতি বিভাগ<br />
                            <b>মোবাইল:</b> ০১৭১০৯৩৪৭৫৩<br /><br />
                            <b>সহকারী তত্ত্বাবধায়ক:</b> মোসাঃ খালেদা ইয়াসমিন, প্রভাষক, ইংরেজি বিভাগ<br />
                            <b>মোবাইল:</b> ০১৭১৭৭৯৫৬৯১
                        </td>
                    </tr>
                    <tr className="even:bg-gray-100 hover:bg-gray-100 transition-all duration-300">
                        <td className="border border-[#ddd] p-2">নিউ বিল্ডিং</td>
                        <td className="border border-[#ddd] p-2">৯৬</td>
                    </tr>
                    <tr className="even:bg-gray-100 hover:bg-gray-100 transition-all duration-300">
                        <td className="border border-[#ddd] p-2">অ্যানেক্স বিল্ডিং (ডরমেটরি মেস)</td>
                        <td className="border border-[#ddd] p-2">১৫</td>
                    </tr>
                    <tr className="even:bg-gray-100 hover:bg-gray-100 transition-all duration-300">
                        <td className="border border-[#ddd] p-2">মোট</td>
                        <td className="border border-[#ddd] p-2">১৮৭</td>
                    </tr>
                </tbody>
            </table>
            <p className="text-gray-500 mt-3">ছাত্রীনিবাস</p>
        </div>
        <hr/>
    </section>
  )
}

export default page