import Image from "next/image";

const page = () => {
  return (
    <section>
      <div className="mb-5 flex items-center justify-between gap-5">
        <h3 className="text-3xl font-bold">Physical Exercise</h3>
        <p className="text-right font-bold">
          শরীরচর্চা বিভাগ – ফোনঃ ৭৭০০০০ (অফিস)০
        </p>
      </div>
      <div className="overflow-x-auto overflow-y-hidden">
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
              <td className="min-w-[60px] border border-[#ddd] p-2 md:min-w-[80px]">
                <Image
                  src="/avatar.jpg"
                  width={100}
                  height={120}
                  alt=""
                  className="w-20 shrink-0 rounded-md object-cover"
                />
              </td>
              <td className="min-w-[100px] border border-[#ddd] p-2">
                মো: শফিকুল ইসলাম
              </td>
              <td className="border border-[#ddd] p-2">-</td>
              <td className="border border-[#ddd] p-2"> শরীরচর্চা শিক্ষক</td>
              <td className="border border-[#ddd] p-2">০১৭১২-২৬৫৯২৮</td>
              <td className="border border-[#ddd] p-2">-</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default page;
