import HomeBanner from "@/components/HomeBanner";
import HomeGallery from "@/components/HomeGallery";
import HomeNews from "@/components/HomeNews";
import HomeNoticeBoard from "@/components/HomeNoticeBoard";

const Page = () => {
  return (
    <>
      <HomeBanner />
      <HomeNoticeBoard />
      <HomeNews />
      <HomeGallery />
    </>
  );
};

export default Page;
