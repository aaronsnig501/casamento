import { NextPage } from "next";
import { Container, Row, Col } from "react-bootstrap";
import withLocale from "../../i18n/hoc/withLocale";
import useTranslation from "../../i18n/hooks/useTranslation";

const Home: NextPage = () => {
  const { locale, t } = useTranslation();

  return (
    <Container fluid>
      <Row>
        <Col>
          <a href="https://us04web.zoom.us/j/72821548402?pwd=bUZTOUc2T2l0V1VlaVp3SU8vMytOUT09">
            Link
          </a>
          <h1>{t("Agenda.heading")}</h1>
          <p>{t("Agenda.paragraphone")}</p>
          <p>{t("Agenda.paragraphtwo")}</p>
          <p>{t("Agenda.paragraphthree")}</p>
          <p>{t("Agenda.paragraphfour")}</p>
        </Col>
      </Row>
    </Container>
  );
};

export default withLocale(Home);
