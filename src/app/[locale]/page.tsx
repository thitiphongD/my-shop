import { useTranslations } from "next-intl";
import React from "react";

const Home = () => {
  const t = useTranslations("Translate");
  return <div>{t("title")}</div>;
};

export default Home;
