import { useTranslations } from "next-intl";
import React from "react";
import Banner from "./components/Banner";
import DiscountBanner from "./components/DiscountBanner";
import RecommendProduct from "./components/RecommendProduct";

const Home = () => {
  const t = useTranslations("Translate");
  return (
    <>
      <Banner />
      <DiscountBanner />
      <RecommendProduct />
    </>
  );
};

export default Home;
