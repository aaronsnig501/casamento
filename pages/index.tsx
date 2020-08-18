import { useState, useEffect } from "react";
import Head from "next/head";
import { NextPage } from "next";
import { Container, Row, Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { i18n, Link } from "../i18n";
import styles from "./index.module.scss";

const Home: NextPage = () => {
  const [today, setToday] = useState<Date>();
  const [weddingDate, setWeddingDate] = useState<Date>();
  const [days, setDays] = useState<number>(0);
  const [hours, setHours] = useState<number>(0);
  const [minutes, setMinutes] = useState<number>(0);
  const [seconds, setSeconds] = useState<number>(0);
  const { t, i18n } = useTranslation();

  const setDates = () => {
    setToday(new Date());
    setWeddingDate(new Date("2020-08-22T10:45:00.000"));

    let delta = Math.abs(+weddingDate - +today) / 1000;
    setDays(Math.floor(delta / 86400));
    setHours(Math.floor(delta / 3600) % 24);
    setMinutes(Math.floor(delta / 60) % 60);
    setSeconds(+(delta % 60).toFixed(0));
  };

  useEffect(() => {
    setDates();
  }, [days, hours, minutes, seconds]);

  return (
    <div className={styles.jumbotron}>
      <Container fluid>
        <Row>
          <Col>
            <h1>{t("welcome")}</h1>
            <button
              type="button"
              className={styles.changeLanguage}
              onClick={() =>
                i18n.changeLanguage(i18n.language === "en" ? "pt" : "en")
              }
            >
              {i18n.language === "en" ? "Portugues" : "English"}
            </button>
            <div className={styles.clock}>
              <div>
                <span className="days">{days.toString()}</span>
                <div className={styles.smalltext}>{t("days")}</div>
              </div>
              <div>
                <span className="hours">{hours.toString()}</span>
                <div className={styles.smalltext}>{t("hours")}</div>
              </div>
              <div>
                <span className="minutes">{minutes.toString()}</span>
                <div className={styles.smalltext}>{t("minutes")}</div>
              </div>
              <div>
                <span className="seconds">{seconds.toString()}</span>
                <div className={styles.smalltext}>{t("seconds")}</div>
              </div>
            </div>
            <Link href="/agenda">
              <a className={styles.rsvp}>Agenda</a>
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

Home.getInitialProps = async () => ({
  namespacesRequired: ["common"],
});

export default Home;
