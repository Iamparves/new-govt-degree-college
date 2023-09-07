const page = () => {
  return (
    <section className="text-sm text-dark md:text-base">
      <p className="mb-5">
        শিক্ষার্থীদের গুণগত উৎকর্ষ সাধন, তাদের মধ্যে প্রতিযোগিতামূলক মনোভাব
        সৃষ্টি, পরীক্ষাভীতি দূরীকরণ ও অধ্যায়ভিত্তিক স্পষ্ট ধারণা অর্জনসহ চূড়ান্ত
        পরীক্ষায় কাঙ্খিত ফলাফল অর্জনের লক্ষ্যে নির্বাচনী পরীক্ষা পর্যন্ত বিশেষ
        ক্লাস টেস্ট এবং নির্বাচনী পরীক্ষার পর থেকে চূড়ান্ত পরীক্ষার পূর্ব
        পর্যন্ত সময়ের প্রাপ্যতার উপর ভিত্তি করে সর্বোচ্চ সংখ্যক মডেল টেস্ট ও
        সল্‌ভ ক্লাস গ্রহণ করা হয়।
      </p>
      <p className="mb-5">
        <strong>ক্লাস টেস্টের বৈশিষ্ট্যঃ</strong>
        <br />
        ১। পরীক্ষার সময়কাল হবে ১ ঘন্টা ১০ মিনিট।
        <br />
        ২। মোট ৪০ নম্বরের (সৃজনশীল-২০, বহুনির্বাচনী-২০) মধ্যে পরীক্ষা অনুষ্ঠিত
        হবে।
        <br />
        ৩। সৃজনশীল প্রশ্ন ৩টি থাকবে; তার মধ্যে ২টি প্রশ্নের উত্তর লিখতে হবে।
        জীববিজ্ঞানের ক্ষেত্রে ১ম পত্র থেকে ২টি এবং ২য় পত্র থেকে ২টি করে সৃজনশীল
        প্রশ্ন থাকবে, তার মধ্যে ১টি করে মোট ২টি প্রশ্নের উত্তর লিখতে হবে।
        জীববিজ্ঞান বহুনির্বাচনীর ক্ষেত্রে প্রতিটি পত্র থেকে ১০টি করে প্রশ্ন
        থাকবে। ১ম পত্র (উদ্ভিদবিজ্ঞান) ও ২য় পত্র (প্রাণিবিজ্ঞান) এর জন্য পৃথক
        পৃথক উত্তরপত্র ব্যবহার করতে হবে।
        <br />
        ৪। প্রতিটি পরীক্ষার পূর্বে সাজেশনমূলক ক্লাশ অনুষ্ঠিত হবে। নির্ধারিত
        সিলেবাসের উপর সম্ভাব্য সকল MCQ প্রশ্ন এবং নমুনা হিসাবে ২/১টি CQ প্রশ্ন
        সম্পর্কে অবহিত করা হবে।
        <br />
        ৫। প্রতিটি পরীক্ষার বিষয়ভিত্তিক সল্‌ভ ক্লাস গ্রহণ করা হবে।
        <br />
        ৬। মডেল টেস্ট চূড়ান্ত পরীক্ষার অনুকরণে অনুষ্ঠিত হবে।
        <br />
        ৭। প্রতিটি পরীক্ষায় বিজ্ঞান শাখা থেকে প্রথম ৬জন কে এবং মানবিক ও ব্যবসায়
        শিক্ষা শাখা থেকে প্রথম ৩জন করে পরীক্ষার্থীকে আনুষ্ঠানিকভাবে পুরস্কৃত করা
        হবে।
        <br />
        ৮। ফলাফলে মেধাক্রম নির্ধারণের ক্ষেত্রে যৌথ অবস্থান নিরসনে ক্লাসে
        উপস্থিতির হারকে অগ্রাধিকার প্রদান করা হবে।
      </p>
      <div className="mb-10">
        <table className="w-full border-collapse border border-[#ddd] text-left">
          <thead>
            <tr>
              <th className="border border-[#ddd] p-2">সময়কাল</th>
              <th className="border border-[#ddd] p-2">পরীক্ষা</th>
              <th className="border border-[#ddd] p-2">সিলেবাস</th>
            </tr>
          </thead>
          <tbody>
            <tr className="transition-all duration-300 odd:bg-[#f2f2f2] hover:bg-[#f2f2f2]">
              <td className="border border-[#ddd] p-2" rowSpan={2}>
                অর্ধবার্ষিক পরীক্ষার পূর্ব পর্যন্ত
              </td>
              <td className="border border-[#ddd] p-2">ক্লাস টেস্ট-১</td>
              <td className="border border-[#ddd] p-2">
                অর্ধবার্ষিক পরীক্ষার নির্ধারিত সিলেবাসের ১ম অর্ধাংশের ওপর
              </td>
            </tr>
            <tr className="transition-all duration-300 odd:bg-[#f2f2f2] hover:bg-[#f2f2f2]">
              <td className="border border-[#ddd] p-2">ক্লাস টেস্ট-২</td>
              <td className="border border-[#ddd] p-2">
                অর্ধবার্ষিক পরীক্ষার নির্ধারিত সিলেবাসের ২য় অর্ধাংশের ওপর
              </td>
            </tr>
            <tr className="transition-all duration-300 odd:bg-[#f2f2f2] hover:bg-[#f2f2f2]">
              <td className="border border-[#ddd] p-2" rowSpan={2}>
                অর্ধবার্ষিক পরীক্ষার পর থেকে বার্ষিক পরীক্ষার পূর্ব পর্যন্ত
              </td>
              <td className="border border-[#ddd] p-2">ক্লাস টেস্ট-৩</td>
              <td className="border border-[#ddd] p-2">
                {" "}
                বার্ষিক পরীক্ষার নির্ধারিত সিলেবাসের ১ম অর্ধাংশের ওপর
              </td>
            </tr>
            <tr className="transition-all duration-300 odd:bg-[#f2f2f2] hover:bg-[#f2f2f2]">
              <td className="border border-[#ddd] p-2">ক্লাস টেস্ট-৪</td>
              <td className="border border-[#ddd] p-2">
                বার্ষিক পরীক্ষার নির্ধারিত সিলেবাসের ২য় অর্ধাংশের ওপর
              </td>
            </tr>
          </tbody>
        </table>
        <p className="mt-2 text-gray-500">ক্লাস টেস্ট-একাদশ শ্রেণি</p>
      </div>
      <div className="mb-10">
        <table className="w-full border-collapse border border-[#ddd] text-left">
          <thead>
            <tr>
              <th className="border border-[#ddd] p-2">সময়কাল</th>
              <th className="border border-[#ddd] p-2">পরীক্ষা</th>
              <th className="border border-[#ddd] p-2">সিলেবাস</th>
            </tr>
          </thead>
          <tbody>
            <tr className="transition-all duration-300 odd:bg-[#f2f2f2] hover:bg-[#f2f2f2]">
              <td className="border border-[#ddd] p-2">
                প্রাকনির্বাচনী পরীক্ষার পূর্ব পর্যন্ত
              </td>
              <td className="border border-[#ddd] p-2">ক্লাস টেস্ট-১</td>
              <td className="border border-[#ddd] p-2">
                প্রাকনির্বাচনী পরীক্ষার নির্ধারিত সিলেবাসের ১ম অর্ধাংশের ওপর
              </td>
            </tr>
            <tr className="transition-all duration-300 odd:bg-[#f2f2f2] hover:bg-[#f2f2f2]">
              <td className="border border-[#ddd] p-2">
                প্রাকনির্বাচনী পরীক্ষার পর থেকে নির্বাচনী পরীক্ষার পূর্ব পর্যন্ত
              </td>
              <td className="border border-[#ddd] p-2">ক্লাস টেস্ট-২</td>
              <td className="border border-[#ddd] p-2">
                নির্বাচনী পরীক্ষার নির্ধারিত সিলেবাসের ১ম অর্ধাংশের ওপর
              </td>
            </tr>
            <tr className="transition-all duration-300 odd:bg-[#f2f2f2] hover:bg-[#f2f2f2]">
              <td className="border border-[#ddd] p-2" rowSpan={8}>
                নির্বাচনী পরীক্ষার পর থেকে চূড়ান্ত পরীক্ষার পূর্ব পর্যন্ত
              </td>
              <td className="border border-[#ddd] p-2">মডেল টেস্ট-১</td>
              <td className="border border-[#ddd] p-2">
                ১ম পত্রের প্রথম এক তৃতীয়াংশের ওপর
              </td>
            </tr>
            <tr className="transition-all duration-300 odd:bg-[#f2f2f2] hover:bg-[#f2f2f2]">
              <td className="border border-[#ddd] p-2">মডেল টেস্ট-২</td>
              <td className="border border-[#ddd] p-2">
                ২য় পত্রের প্রথম এক তৃতীয়াংশের ওপর
              </td>
            </tr>
            <tr className="transition-all duration-300 odd:bg-[#f2f2f2] hover:bg-[#f2f2f2]">
              <td className="border border-[#ddd] p-2">মডেল টেস্ট-৩</td>
              <td className="border border-[#ddd] p-2">
                ১ম পত্রের মাঝের এক তৃতীয়াংশের ওপর
              </td>
            </tr>
            <tr className="transition-all duration-300 odd:bg-[#f2f2f2] hover:bg-[#f2f2f2]">
              <td className="border border-[#ddd] p-2">মডেল টেস্ট-৪</td>
              <td className="border border-[#ddd] p-2">
                ২য় পত্রের মাঝের এক তৃতীয়াংশের ওপর
              </td>
            </tr>
            <tr className="transition-all duration-300 odd:bg-[#f2f2f2] hover:bg-[#f2f2f2]">
              <td className="border border-[#ddd] p-2">মডেল টেস্ট-৫</td>
              <td className="border border-[#ddd] p-2">
                ১ম পত্রের শেষ এক তৃতীয়াংশের ওপর
              </td>
            </tr>
            <tr className="transition-all duration-300 odd:bg-[#f2f2f2] hover:bg-[#f2f2f2]">
              <td className="border border-[#ddd] p-2">মডেল টেস্ট-৬</td>
              <td className="border border-[#ddd] p-2">
                ২য় পত্রের শেষ এক তৃতীয়াংশের ওপর
              </td>
            </tr>
            <tr className="transition-all duration-300 odd:bg-[#f2f2f2] hover:bg-[#f2f2f2]">
              <td className="border border-[#ddd] p-2">মডেল টেস্ট-৭</td>
              <td className="border border-[#ddd] p-2">
                ১ম পত্রের পুরো সিলেবাসের উপর
              </td>
            </tr>
            <tr className="transition-all duration-300 odd:bg-[#f2f2f2] hover:bg-[#f2f2f2]">
              <td className="border border-[#ddd] p-2">মডেল টেস্ট-৮</td>
              <td className="border border-[#ddd] p-2">
                ২য় পত্রের পুরো সিলেবাসের উপর
              </td>
            </tr>
          </tbody>
        </table>
        <p className="mt-2 text-gray-500">ক্লাস টেস্ট-দ্বাদশ শ্রেণি</p>
      </div>
      <p className="mb-5">
        বি: দ্র:- সময়প্রাপ্তির উপর ভিত্তি করে এই মডেল টেস্ট এর সংখ্যা বৃদ্ধি করা
        হতে পারে।
      </p>
      <p className="mb-5">
        <strong>পরীক্ষার সময়সূচিঃ</strong>
        <br />
        ১। একাদশ শ্রেণির অর্ধবার্ষিক পরীক্ষা – ১৫ ডিসেম্বরের মধ্যে
        <br />
        ২। একাদশ শ্রেণির বার্ষিক পরীক্ষা – ২৮ এপ্রিল – ৬ মে (মন্ত্রণালয় কর্তৃক
        নির্দেশিত)
        <br />
        ৩। দ্বাদশ শ্রেণির প্রাকনির্বাচনী পরীক্ষা – ৩০ সেপ্টেম্বরের মধ্যে
        <br />
        ৪। দ্বাদশ শ্রেণির নির্বাচনী পরীক্ষা – ২৪ নভেম্বর – ২ ডিসেম্বর
        (মন্ত্রণালয় কর্তৃক নির্দেশিত)
      </p>
      <p className="mb-5">
        বিঃদ্রঃ অনিবার্য কারণে কিংবা বাস্তবতা বিবেচনায় শিক্ষার্থীদের কল্যাণে
        পরীক্ষার সময়সূচি পরিবর্তন হতে পারে।
      </p>
      <p className="mb-5">
        <strong>ফলাফল প্রকাশঃ</strong>
        <br />
        প্রতিটি পরীক্ষায় শেষ পত্রের পরীক্ষা অনুষ্ঠিত হওয়ার ১৫ দিনের মধ্যে।
      </p>
      <p className="mb-4">
        শিক্ষা মন্ত্রণালয় কর্তৃক জারিকৃত প্রজ্ঞাপন (শিম/শাঃ-১১/১৯-১/২০০৭/১৭৪,
        তারিখঃ ০২/০৩/২০১০ খ্রিঃ) অনুসারে বর্তমানে প্রচলিত GPA/CGPA এর বিপরীতে
        পূর্বের ফলাফলের (১ম, ২য় ও ৩য় বিভাগ) সমতা বিধানের নিয়মাবলীঃ
      </p>
      <div className="mb-10">
        <table className="w-full border-collapse border border-[#ddd] text-left">
          <thead>
            <tr>
              <th className="border border-[#ddd] p-2">অর্জিত GPA</th>
              <th className="border border-[#ddd] p-2">
                পূর্বের সমতুল্য বিভাগ/শ্রেণি
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="transition-all duration-300 odd:bg-[#f2f2f2] hover:bg-[#f2f2f2]">
              <td className="border border-[#ddd] p-2">৩.০০ বা তদুর্ধ</td>
              <td className="border border-[#ddd] p-2">প্রথম বিভাগ</td>
            </tr>
            <tr className="transition-all duration-300 odd:bg-[#f2f2f2] hover:bg-[#f2f2f2]">
              <td className="border border-[#ddd] p-2">
                ২.০০ বা তদুর্ধ কিন্তু ৩.০০ এর কম
              </td>
              <td className="border border-[#ddd] p-2">দ্বিতীয় বিভাগ</td>
            </tr>
            <tr className="transition-all duration-300 odd:bg-[#f2f2f2] hover:bg-[#f2f2f2]">
              <td className="border border-[#ddd] p-2">
                ১.০০ বা তদুর্ধ কিন্তু ২.০০ এর কম
              </td>
              <td className="border border-[#ddd] p-2">তৃতীয় বিভাগ</td>
            </tr>
          </tbody>
        </table>
        <p className="mt-2 text-gray-500">ফলাফলের সমতা বিধানের নিয়মাবলী</p>
      </div>
      <div className="text-center">
        <h3 className="text-2xl font-bold">
          উচ্চ মাধ্যমিক শ্রেণির বিষয় নির্বাচন
        </h3>
        <p>(নিউ গভঃ ডিগ্রি কলেজ, রাজশাহী’র জন্য প্রযোজ্য)</p>
      </div>
      <p className="my-5">
        সকল শাখার জন্য প্রযোজ্য আবশ্যিক বিষয়সমূহঃ <br />
        ১। বাংলা (১০১, ১০২) – ২০০ নম্বর <br />
        ২। ইংরেজি (১০৭, ১০৮) – ২০০ নম্বর <br />
        ৩। তথ্য ও যোগাযোগ প্রযুক্তি (২৭৫) – ১০০ নম্বর
      </p>
      <div className="mb-10">
        <table className="w-full border-collapse border border-[#ddd]">
          <tbody>
            <tr className="transition-all duration-300 hover:bg-[#f2f2f2]">
              <td className="border border-[#ddd] p-2">
                ক গুচ্ছ <br />
                আবশ্যিক বিষয় – (৩টি): ৬০০ নম্বর <br />
                ১। পদার্থবিজ্ঞান (১৭৪, ১৭৫) <br />
                ২। রসায়ন (১৭৬, ১৭৭) <br />
                ৩। উচ্চতর গণিত/জীববিজ্ঞান (২৬৫, ২৬৬)/ (১৭৮-১৭৯)
              </td>
              <td className="border border-[#ddd] p-2">
                খ গুচ্ছ <br />
                ৪র্থ বিষয় (১টি): ২০০ নম্বর <br />
                ১। উচ্চতর গণিত (২৬৫, ২৬৬) <br />
                ২। জীববিজ্ঞান (১৭৮, ১৭৯) <br />
                ৩। পরিসংখ্যান (১২৯, ১৩০)
              </td>
            </tr>
          </tbody>
        </table>
        <p className="mt-2 text-gray-500">বিজ্ঞান শাখা</p>
      </div>
      <div className="mb-10">
        <table className="w-full border-collapse border border-[#ddd]">
          <tbody>
            <tr className="transition-all duration-300 hover:bg-[#f2f2f2]">
              <td className="border border-[#ddd] p-2">
                ক গুচ্ছ <br />
                নৈর্বাচনিক বিষয়-(যে কোন ৩টি): ৬০০ নম্বর <br />
                ১। ইতিহাস/ইসলামের ইতিহাস (৩০৪, ৩০৫) / (২৬৭, ২৬৮) <br />
                ২। পৌরনীতি ও সুশাসন (২৬৯, ২৭০) <br />
                ৩। অর্থনীতি (১০৯, ১১০) <br />
                ৪। ভূগোল (১২৫, ১২৬) <br />
                ৫। যুক্তিবিদ্যা (১২১, ১২২)
              </td>
              <td className="border border-[#ddd] p-2">
                খ গুচ্ছ <br />
                ৪র্থ বিষয় (১টি): ২০০ নম্বর <br />
                ১। যুক্তিবিদ্যা (১২১, ১২২) <br />
                ২। ভূগোল (১২৫, ১২৬) <br />
                ৩। ইতিহাস (৩০৪, ৩০৫) <br />
                ৪। ইসলামের ইতিহাস (২৬৭, ২৬৮) <br />
                ৫। ইসলাম শিক্ষা (২৪৯, ২৫০) <br />
                ৬। পরিসংখ্যান (১২৯, ১৩০) <br />
                ৭। অর্থনীতি (১০৯, ১১০) <br />
                ৮। পৌরনীতি ও সুশাসন (২৬৯, ২৭০)
              </td>
            </tr>
          </tbody>
        </table>
        <p className="mt-2 text-gray-500">মানবিক শাখা</p>
      </div>
      <div className="mb-10">
        <table className="w-full border-collapse border border-[#ddd]">
          <tbody>
            <tr className="transition-all duration-300 hover:bg-[#f2f2f2]">
              <td className="border border-[#ddd] p-2">
                ক গুচ্ছ <br />
                আবশ্যিক বিষয় – (৩টি): ৬০০ নম্বর <br />
                ১। ব্যবসায় সংগঠন ও ব্যবস্থাপনা (২৭৭, ২৭৮) <br />
                ২। হিসাববিজ্ঞান (২৫৩, ২৫৪) <br />
                ৩। ফিন্যান্স, ব্যাংকিং ও বিমা/উৎপাদন ব্যবস্থাপনা ও বিপণন (২৯২,
                ২৯৩)/(২৮৬, ২৮৭)
              </td>
              <td className="border border-[#ddd] p-2">
                খ গুচ্ছ <br />
                ৪র্থ বিষয় (১টি): ২০০ নম্বর <br />
                ১। ফিন্যান্স, ব্যাংকিং ও বিমা (২৯২, ২৯৩) <br />
                ২। উৎপাদন ব্যবস্থাপনা ও বিপণন (২৮৬, ২৮৭) <br />
                ৩। পরিসংখ্যান (১২৯, ১৩০) <br />
                ৪। অর্থনীতি (১০৯, ১১০)
              </td>
            </tr>
          </tbody>
        </table>
        <p className="mt-2 text-gray-500">ব্যবসায় শিক্ষা শাখা</p>
      </div>
    </section>
  );
};

export default page;
