import {
  AboutUsSection,
  FAQSection,
  HeroSection,
  NearShelterSection,
  RecentlyAnnouncementSection,
  TrendingSection,
} from '@/components';

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <AboutUsSection />
      <TrendingSection />
      <RecentlyAnnouncementSection />
      <FAQSection />
      <NearShelterSection />
    </>
  );
};

export default HomePage;
