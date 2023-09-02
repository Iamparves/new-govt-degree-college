import Image from "next/image";
import Link from "next/link";
import Marquee from "react-fast-marquee";

const HomeBanner = () => {
  return (
    <section className="">
      <Link href="https://www.youtube.com/watch?v=v1R-CB3e-pw" target="_blank">
        <Image
          src="/national-portal-card-pm.jpeg"
          width={690}
          height={390}
          alt=""
          sizes="(min-width: 1000px) 627px, (min-width: 780px) calc(52.5vw + 128px), (min-width: 580px) 508px, 92.31vw"
        />
      </Link>
      <Marquee pauseOnHover={true} className="mt-4 bg-[#E6E7E8] py-1.5">
        <p className="text-xl font-bold text-[#212529] md:text-2xl">
          করোনাভাইরাসের বিস্তার রোধে এখনই ডাউনলোড করুন Corona Tracer BD অ্যাপ।
          ডাউনলোড করতে ক্লিক করুন{" "}
          <Link
            href="https://bit.ly/coronatracerbd"
            target="_blank"
            className="text-[#0000ff]"
          >
            https://bit.ly/coronatracerbd
          </Link>
          । নিজে সুরক্ষিত থাকুন অন্যকেও নিরাপদ রাখুন। দেশের প্রথম ক্রাউডফান্ডিং
          প্ল্যাটফর্ম 'একদেশ'- এর মাধ্যমে আর্থিক অনুদান পৌঁছে দিন নির্বাচিত
          সরকারি-বেসরকারি প্রতিষ্ঠানসমূহে। ভিজিট করুন{" "}
          <Link
            href="https://ekdesh.ekpay.gov.bd"
            target="_blank"
            className="text-[#0000ff]"
          >
            ekdesh.ekpay.gov.bd
          </Link>{" "}
          অথবা{" "}
          <Link
            href="https://play.google.com/store/apps/details?id=com.synesis.donationapp"
            target="_blank"
            className="text-[#0000ff]"
          >
            “Ek Desh”
          </Link>{" "}
          অ্যাপ ডাউনলোড করুন। করোনার লক্ষণ দেখা দিলে গোপন না করে ডাক্তারের
          পরামর্শের জন্য ফ্রি কল করুন ৩৩৩ ও ১৬২৬৩ নম্বরে। করোনাভাইরাস প্রতিরোধে
          নিয়ম মেনে মাস্ক ব্যবহার করুন। আতঙ্কিত না হয়ে বরং সচেতন থাকুন। ভিজিট
          করুন{" "}
          <Link
            href="https://corona.gov.bd"
            target="_blank"
            className="mr-32 text-[#0000ff]"
          >
            corona.gov.bd
          </Link>
        </p>
      </Marquee>
    </section>
  );
};

export default HomeBanner;
