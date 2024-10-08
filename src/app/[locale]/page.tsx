import { useTranslations } from "next-intl";
import React, { Suspense } from "react";
import dynamic from "next/dynamic";
import Banner from "./components/Banner";
import DiscountBanner from "./components/DiscountBanner";
import RecommendProduct from "./components/RecommendProduct";

// const Banner = dynamic(() => import("./components/Banner"), { ssr: true });
// const DiscountBanner = dynamic(() => import("./components/DiscountBanner"), {
//   ssr: true,
// });

// const RecommendProduct = dynamic(
//   () => import("./components/RecommendProduct"),
//   { ssr: true }
// );

// const Loading = () => <div className="text-2xl font-bold">กำลังโหลด...</div>;

const Home = () => {
  const t = useTranslations("Translate");
  return (
    // <Suspense fallback={<Loading />}>
    //   <Banner />
    //   <DiscountBanner />
    //   <RecommendProduct />
    // </Suspense>
    <>
      <Banner />
      <DiscountBanner />
      <RecommendProduct />
    </>
  );
};

export default Home;
