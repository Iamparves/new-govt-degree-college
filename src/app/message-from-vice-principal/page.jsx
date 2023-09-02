import Image from "next/image";

const Page = () => {
  return (
    <section>
      <h1 className="mb-3 text-3xl font-bold text-dark">উপাধ্যক্ষের বাণী</h1>
      <div className="flow-root">
        <Image
          src="/sidebar/vice-principal.jpg"
          width={225}
          height={224}
          alt=""
          className="float-left mb-5 mr-5"
        />
        <div className="space-y-5 text-dark">
          <p>
            শিক্ষা মানুষের মনকে আলোকিত করে,চেতনাশক্তিকে শাণিত করে এবং
            ন্যায়-অন্যায় বোধকে জাগ্রত করে । পরিবর্তনশীল বিশ্বের সাথে তাল
            মিলিয়ে প্রণীত যুগোপযোগী শিক্ষা ব্যবস্থা শিক্ষার্থীদের সৃষ্টিশীলতার
            যথাযথ বিকাশ ঘটায় । দেশের আর্থ-সামাজিক উন্নয়নকে সামনে রেখেই
            ঐতিহ্যবাহী এ শিক্ষা প্রতিষ্ঠানটি দেশ প্রেমিক, দক্ষ, মানবিক
            মূল্যবোধসম্পন্ন, আধুনিক ও বিজ্ঞানমনস্ক মানবসম্পদ সৃষ্টিতে কার্যকর
            ভূমিকা রেখে চলেছে।
          </p>
          <p>
            <b>প্রফেসর ড. মোঃ অলীউল আলম, উপাধ্যক্ষ</b>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Page;
