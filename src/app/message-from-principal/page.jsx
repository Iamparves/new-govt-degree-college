import Image from "next/image";

const Page = () => {
  return (
    <section>
      <h1 className="mb-3 text-3xl font-bold text-dark">অধ্যক্ষের বাণী</h1>
      <div className="flow-root">
        <Image
          src="/sidebar/principal.jpg"
          width={225}
          height={224}
          alt=""
          className="float-left mb-5 mr-5"
        />
        <div className="space-y-5 text-dark">
          <p>
            নিউ গভঃ ডিগ্রী কলেজ, রাজশাহী বাংলাদেশের একটি গৌরবদীপ্ত ও আলোকোজ্জ্বল
            শিক্ষা প্রতিষ্ঠান । এ প্রতিষ্ঠানের ছাত্র-ছাত্রীদের মেধা, মনন,
            সহনশীলতা, সৃজনশীলতা, নেতৃত্ব, শৃঙ্খলা ও দক্ষতার ভিত্তিতে মানবিক
            মূল্যবোধসম্পন্ন মুক্তিযুদ্ধের চেতনায় সুযোগ্য নাগরিক হিসেবে গড়ে তোলাই
            আমাদের অঙ্গীকার । কেবলমাত্র ‘জিপিএ ৫’ নয়; আমাদের নৈতিক, সামাজিক ও
            সাংস্কৃতিক মূল্যবোধের চর্চার মধ্য দিয়ে প্রত্যেক শিক্ষার্থীর
            আত্মবিকাশ আমাদের প্রত্যাশা। কেবল অর্থনৈতিক উন্নতিই মানুষকে
            সুখ-শান্তি বা স্বস্তি দিতে পারে না। এজন্য প্রয়োজন ন্যায়, সত্য ও
            সুন্দরের চর্চার মধ্য দিয়ে মানবিক গুণাবলি অর্জন করা। এ কলেজের
            শিক্ষার্থীরা জ্ঞান ও ন্যায়ভিত্তিক সমাজ ও রাষ্ট্রব্যবস্থা গড়ার
            প্রত্যয়ে নিবেদিত হবে।
          </p>
          <p>
            আশা করি এ কলেজের শিক্ষার্থীরা নিখাদ দেশপ্রেমে উদ্বুদ্ধ হয়ে যথেষ্ট
            সচেতনভাবে বহুমুখী কর্মকাণ্ডে অংশগ্রহণ করে নিজেদের প্রতিভা বিকাশে
            উদ্যমী হবে। সৃজনশীলতা ও বুদ্ধিবৃত্তির বিকাশে পাঠ্যবহির্ভূত
            জ্ঞানচর্চাও অত্যন্ত গুরুত্বপূর্ণ। ন্যায়, সত্য ও সুন্দরের চর্চার মধ্য
            দিয়ে নিজের নৈতিক ও মানবিক মূল্যবোধের চেতনাকে শাণিত করবে। মানুষকে
            অন্ধকার থেকে আলোর পথে নিয়ে যাবে। সন্ত্রাস, সাম্প্রদায়িকতা, অন্যায় ও
            কুসংস্কারের বিরুদ্ধে প্রতিরোধ গড়ে সত্যনিষ্ঠ ও বস্তুনিষ্ঠ জ্ঞানচর্চার
            মধ্য দিয়ে মাননীয় প্রধানমন্ত্রী শেখ হাসিনা নির্দেশিত ডিজিটাল বাংলাদেশ
            গড়তে অবদান রাখবে।
          </p>
          <p>
            বিজ্ঞানমনস্কতা, মুক্তচিন্তা, ন্যায়বোধ, মানবিকতা, উদারতা, সহিষ্ণুতা
            এবং ভ্রাতৃত্ববোধের চেতনায় ঋদ্ধ হয়ে বিজ্ঞান-প্রযুক্তির অভাবনীয়
            অগ্রগতি, অবাধ তথ্যপ্রবাহ এবং বিশ্বায়নের যুগে চরম ভোগবাদী মানসিকতা
            পরিহার করে সৃজনশীল মুক্ত জ্ঞানচর্চার মাধ্যমে আজকের শিক্ষার্থীরাই
            নৈতিক সংকট থেকে পরিত্রাণে পথ দেখাবে; মানবতা এবং বিশ্বশান্তি
            প্রতিষ্ঠায় অবদান রাখবে।
          </p>
          <p>
            জাতির পিতা বঙ্গবন্ধু শেখ মুজিবুর রহমানের স্বপ্নের শোষণমুক্ত,
            বৈষম্যহীন, ধর্মনিরপেক্ষ, গণতান্ত্রিক ও সমৃদ্ধ বাংলাদেশ গড়ার দর্শন
            হোক এ কলেজের শিক্ষার্থীদের পাথেয়।
          </p>
          <p>
            <b>প্রফেসর কালাচাঁদ শীল, অধ্যক্ষ</b>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Page;
