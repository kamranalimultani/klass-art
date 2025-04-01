import { DetailedFeatures } from "./components/DetailedFeatures";
import { Faq } from "./components/Faq";
import { MainSlider } from "./components/MainSlider";
import { PricingSection } from "./components/PricingSection";
import { Thumbnails, Thumnails } from "./components/Thumnails";
import { UltimateFeature } from "./components/UltimateFeature";

export default function Home() {
  return (
    <div className="">
      <MainSlider />
      <UltimateFeature />
      <DetailedFeatures />
      <Thumbnails />
      <PricingSection />
      <Faq />
    </div>
  );
}
