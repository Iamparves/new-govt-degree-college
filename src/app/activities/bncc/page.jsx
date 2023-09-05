const Page = () => {
    return (
      <section className="text-dark">
        <h3 className="text-3xl font-bold mb-3">BNCC</h3>
        <p className="text-sm md:text-base mb-3">১৯৭৯ সালে ১নং মহাস্থান ব্যাটালিয়নের প্রতিষ্ঠাকাল থেকেই এ কলেজে বিএনসিসি’র কার্যক্রম শুরু হয়। মূল ভবনের দক্ষিণ ব্লকের নিচতলায় অডিটরিয়াম সংলগ্ন ১২৩ ও ১২৪ নম্বর কক্ষ বিএনসিসি’র অফিস ও স্টোররুম হিসেবে বরাদ্দ আছে। দেশের যুব সমাজের নৈতিক চরিত্রের উন্নয়ন, নেতৃত্বের বিকাশ, দেশসেবা ও সহমর্মিতার মনোভাব গঠন সর্বোপরি সামরিক প্রশিক্ষণের মাধ্যমে মাতৃভূমি প্রতিরক্ষায় দ্বিতীয় সারির সৈনিক তৈরি ও অভ্যন্তরীণ বিপর্যয় মোকাবেলায় স্বেচ্ছাসেবী গড়ে তোলার মহান উদ্দেশ্যসমূহ সামনে রেখে বিএনসিসি নিরলসভাবে কাজ করে যাচ্ছে।</p>
        <p className="text-sm md:text-base mb-3">বাংলাদেশে মোট ৫টি রেজিমেন্টের মধ্যে নিউ গভঃ ডিগ্রী কলেজের বিএনসিসি ইউনিট ‘মহাস্থান রেজিমেন্ট’ এর অধীন। কলেজের জন্মলগ্ন থেকে প্রতিষ্ঠিত এ সংগঠনে ৩০ সদস্যের একটি পুরুষ প্লাটুন রয়েছে। একজন প্লাটুন কমান্ডর এ প্লাটুনের দায়িত্বে রয়েছেন। এ ছাড়া কলেজে কর্মরত ব্যাটালিয়ন উপঅধিনায়কও বিএনসিসি ইউনিটের তদারকি করে থাকেন।</p>
        <p className="text-sm md:text-base">বিএনসিসি ইউনিটের সঙ্গে সংশ্লিষ্ট কর্মকর্তাগণের পরিচিতি ও কন্ট্যাক্ট নম্বর (অফিস-৭৭৩১৮৮)</p>

        <table className="border border-collapse border-[#ddd] text-sm md:text-base text-left mt-10 w-full">
            <thead>
                <tr>
                    <th className="font-bold border border-[#ddd] p-2">নাম ও পদবী (কলেজ)</th>
                    <th className="font-bold border border-[#ddd] p-2">দায়িত্ব</th>
                    <th className="font-bold border border-[#ddd] p-2">মোবাইল নম্বর</th>
                </tr>
            </thead>
            <tbody>
                <tr className="bg-gray-100">
                    <td className="border border-[#ddd] p-2">ক্যাপ্টেন ড. মোঃ মফিজুদ্দিন মোল্লা (বিটিএফও), সহযোগী অধ্যাপক ও বিভাগীয় প্রধান, উদ্ভিদবিজ্ঞান বিভাগ</td>
                    <td className="border border-[#ddd] p-2">ব্যাটালিয়ন উপঅধিনায়ক</td>
                    <td className="border border-[#ddd] p-2">০১৫৫৬-৩১০১৫০</td>
                </tr>
                <tr className="hover:bg-gray-100 transition-all duration-300">
                    <td className="border border-[#ddd] p-2">পিইউও ইমামুল মোত্তাকিন, প্রভাষক, ব্যবস্থাপনা বিভাগ</td>
                    <td className="border border-[#ddd] p-2">প্লাটুন কমান্ডার</td>
                    <td className="border border-[#ddd] p-2">০১৭১১-৫০৭৫৫৯, ০১৯১৯-৫০৭৫৫৯</td>
                </tr>
                </tbody>
            </table>
      </section>
    );
  };
  
  export default Page;
  