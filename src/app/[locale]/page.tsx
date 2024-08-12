import { useTranslations } from "next-intl";
import React from "react";
import Banner from "./components/Banner";
import DiscountBanner from "./components/DiscountBanner";

const Home = () => {
  const t = useTranslations("Translate");
  return (
    <>
      <Banner />
      <DiscountBanner />
    </>
  );
};

export default Home;
