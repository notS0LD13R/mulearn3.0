import React from "react";
import DynamicParaBox from "../../Components/HomeComponents/DynamicParaBox/DynamicParaBox";
import Banner from "../../Components/CommunityLogoScroller/Banner";
import HorizCardGrp from "../../Components/HomeComponents/HorizCardGrp/HorizCardGrp";
import FAQ from '../../Components/HomeComponents/Faq/Faq'
import Footer from '../../Components/Footer/Footer'

const imageCount = 5;
const images = new Array(imageCount)
  .fill(`../../../public/logos`)
  .map((image, ix) => ({
    id: crypto.randomUUID(),
    image: `${image}${ix + 1}.png`,
  }));

const Home = () => {
  return (
    <div>
      <Banner images={images} speed={8000} />
      <HorizCardGrp />
      <DynamicParaBox />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Home;
