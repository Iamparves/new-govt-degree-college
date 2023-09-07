import Image from "next/image";

const page = () => {
  return (
    <section>
      <div className="mb-5 flex items-center justify-between gap-5">
        <h3 className="text-3xl font-bold">Library</h3>
        <p className="text-right font-bold">গ্রন্থাগার – ফোনঃ ৭৭০০০০</p>
      </div>
      <p className="mb-5 text-justify">
        কলেজের উত্তর ব্লকের তৃতীয় তলায় অবস্থিত লাইব্রেরিটি অনেক দুষ্প্রাপ্য এবং
        মূল্যবান পুস্তক ও সাময়িকীতে সমৃদ্ধ। লাইব্রেরিতে সংগৃহীত পুস্তকের সংখ্যা
        প্রায় ২১ হাজার। কলেজের ছাত্র-ছাত্রী ও শিক্ষকবৃন্দ এ লাইব্রেরিতে নিয়মিত
        পড়াশোনা করে থাকেন। সম্প্রতি লাইব্রেরির অভ্যন্তরীণ অংশ সংস্কার করে
        পাঠকদের বসার স্থান বৃদ্ধিসহ কম্পিউটার ও ইন্টারনেট সংযোগ স্থাপনের মাধ্যমে
        তথ্য ও প্রযুক্তির সাথে সংযুক্ত করা হয়েছে। লাইব্রেরিতে ‘মুক্তিযুদ্ধ
        কর্ণার’ ও শিক্ষকদের পড়াশোনা করার পৃথক স্থান রয়েছে। এছাড়াও ১৫টি বিভাগে
        বিভাগীয় সেমিনার লাইব্রেরি রয়েছে।
      </p>
      <div className="overflow-y-auto overflow-x-hidden">
        <table className="w-full border-collapse border border-[#ddd] text-left text-sm text-dark md:text-base">
          <thead>
            <tr>
              <td className="border border-[#ddd] p-2 font-bold">ছবি</td>
              <td className="border border-[#ddd] p-2 font-bold">নাম</td>
              <td className="border border-[#ddd] p-2 font-bold">আই.ডি.</td>
              <td className="border border-[#ddd] p-2 font-bold">পদবী</td>
              <td className="border border-[#ddd] p-2 font-bold">মোবাইল নং.</td>
              <td className="border border-[#ddd] p-2 font-bold">ই.মেইল</td>
            </tr>
          </thead>
          <tbody>
            <tr className="transition-all duration-300 odd:bg-[#f2f2f2] hover:bg-[#f2f2f2]">
              <td className="border border-[#ddd] p-2">
                <Image
                  src="/avatar.jpg"
                  width={100}
                  height={120}
                  className="w-28 rounded-md object-cover"
                />
              </td>
              <td className="border border-[#ddd] p-2">মো: মুখলেসুর রহমান</td>
              <td className="border border-[#ddd] p-2">-</td>
              <td className="border border-[#ddd] p-2">লাইব্রেরিয়ান</td>
              <td className="border border-[#ddd] p-2">০১৯১৫৮৫৭৮৭৪</td>
              <td className="border border-[#ddd] p-2">
                mukhlesur.1964@gmail.com
              </td>
            </tr>
            <tr className="transition-all duration-300 odd:bg-[#f2f2f2] hover:bg-[#f2f2f2]">
              <td className="border border-[#ddd] p-2">
                <Image
                  src="/avatar.jpg"
                  width={100}
                  height={120}
                  className="w-28 rounded-md object-cover"
                />
              </td>
              <td className="border border-[#ddd] p-2">মো: ওয়াহেদুল ইসলাম</td>
              <td className="border border-[#ddd] p-2">-</td>
              <td className="border border-[#ddd] p-2">সহকারী লাইব্রেরিয়ান</td>
              <td className="border border-[#ddd] p-2">০১৭১৪-৫৬৮৩২৬</td>
              <td className="border border-[#ddd] p-2">
                wahedulndc.24@yahoo.com
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default page;
