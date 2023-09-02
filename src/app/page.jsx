import HomeBanner from "@/components/HomeBanner";
import HomeBoxLinks from "@/components/HomeBoxLinks";
import HomeGallery from "@/components/HomeGallery";
import HomeMap from "@/components/HomeMap";
import HomeNews from "@/components/HomeNews";
import HomeNoticeBoard from "@/components/HomeNoticeBoard";
import HomeVideo from "@/components/HomeVideo";

const Page = () => {
  return (
    <>
      <HomeBanner />
      <HomeNoticeBoard />
      <HomeNews />
      <HomeBoxLinks />
      <HomeGallery />
      <HomeVideo />
      <HomeMap />
    </>
  );
};

export default Page;
