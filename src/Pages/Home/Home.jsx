import React from "react";
import DynamicParaBox from "../../Components/HomeComponents/DynamicParaBox/DynamicParaBox";
import Banner from "../../Components/CommunityLogoScroller/Banner";
import Journey from "../../Components/HomeComponents/Journey/Journey";
import HorizCardGrp from "../../Components/HomeComponents/HorizCardGrp/HorizCardGrp";
import CareerLabs from "../../Components/HomeComponents/CareerLabs/CareerLabs";
import Comments from "../../Components/HomeComponents/Comments/Comments";
import FAQ from "../../Components/HomeComponents/Faq/Faq";
import Footer from "../../Components/Footer/Footer";
import images from "../../assets/Logos";
import Navbar from "../../Components/NavBar/NavBar";
const imageList = Object.values(images).map((image, ix) => ({
    id: crypto.randomUUID(),
    image: image,
}));

const faqData = [
    {
        head: "lorem ipsum?",
        para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
    },
    {
        head: "lorem ipsum lorem ipsum lorem ipsum?",
        para: "Lorem Ipsum is simply dummLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,y text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
    },
    {
        head: "lorem ipsum?",
        para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
    },
];

const Home = () => {
    return (
        <div>
            <Navbar />
            <Banner images={imageList} speed={8000} />
            {/* <HorizCardGrp /> */}
            <CareerLabs />
            <DynamicParaBox />
            <Comments />
            <Journey />
            <FAQ faqs={faqData} />
            <Footer />
        </div>
    );
};

export default Home;
