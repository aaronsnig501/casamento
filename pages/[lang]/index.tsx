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
            <h1>{t("mainheader.welcome")}</h1>
            <div className={styles.clock}>
              <div>
                <span className="days">10</span>
                <div className={styles.smalltext}>{t("mainheader.days")}</div>
              </div>
              <div>
                <span className="hours">7</span>
                <div className={styles.smalltext}>{t("mainheader.hours")}</div>
              </div>
              <div>
                <span className="minutes">5</span>
                <div className={styles.smalltext}>
                  {t("mainheader.minutes")}
                </div>
              </div>
              <div>
                <span className="seconds">3</span>
                <div className={styles.smalltext}>
                  {t("mainheader.seconds")}
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default withLocale(Home);
