import Head from "next/head";
import { NextPage } from "next";
import withLocale from "../../i18n/hoc/withLocale";
import useTranslation from "../../i18n/hooks/useTranslation";

const Home: NextPage = () => {
  const { locale, t } = useTranslation();

  return <h1>{t("mainheader")}</h1>;
};

export default withLocale(Home);
