import Head from "next/head";
import { NextPage } from "next";
import { Container, Row, Col } from "react-bootstrap";
import withLocale from "../../i18n/hoc/withLocale";
import useTranslation from "../../i18n/hooks/useTranslation";
import styles from "./index.module.scss";

const Home: NextPage = () => {
  const { locale, t } = useTranslation();

  return (
    <div className={styles.jumbotron}>
      <Container fluid>
        <Row>
          <Col>
            <h1>{t("mainheader")}</h1>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default withLocale(Home);
