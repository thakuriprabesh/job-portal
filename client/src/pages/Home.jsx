import {
  Hero,
  WhyChooseUs,
  Success,
  TrendingCategory,
  LandingJobSection,
} from "../components/index";

export function Home() {
  return (
    <>
      <Hero />
      <LandingJobSection />
      <WhyChooseUs />
      <TrendingCategory />
      <Success />
    </>
  );
}
