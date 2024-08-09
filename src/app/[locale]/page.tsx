import { useTranslations } from "next-intl";
import React from "react";

const Home = () => {
  const t = useTranslations("HomePage");
  return <div>{t("title")}</div>;
};

export default Home;
