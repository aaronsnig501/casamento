import { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import { NextPage } from "next";
import { Container, Row, Col } from "react-bootstrap";
import withLocale from "../../i18n/hoc/withLocale";
import useTranslation from "../../i18n/hooks/useTranslation";
import styles from "./index.module.scss";

const Home: NextPage = () => {
  const { locale, t } = useTranslation();
  const [today, setToday] = useState<Date>();
  const [weddingDate, setWeddingDate] = useState<Date>();
  const [days, setDays] = useState<number>(0);
  const [hours, setHours] = useState<number>(0);
  const [minutes, setMinutes] = useState<number>(0);
  const [seconds, setSeconds] = useState<number>(0);

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
            <h1>
              You are cordially invited to the wedding of Aaron Sinnott & Camila
              Lopes
            </h1>
            <div className={styles.clock}>
              <div>
                <span className="days">{days}</span>
                <div className={styles.smalltext}>{t("mainheader.days")}</div>
              </div>
              <div>
                <span className="hours">{hours}</span>
                <div className={styles.smalltext}>{t("mainheader.hours")}</div>
              </div>
              <div>
                <span className="minutes">{minutes}</span>
                <div className={styles.smalltext}>
                  {t("mainheader.minutes")}
                </div>
              </div>
              <div>
                <span className="seconds">{seconds}</span>
                <div className={styles.smalltext}>
                  {t("mainheader.seconds")}
                </div>
              </div>
            </div>
            <Link href="/[lang]/agenda" as={`/${locale}/agenda`}>
              <a className={styles.rsvp}>Agenda</a>
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default withLocale(Home);
