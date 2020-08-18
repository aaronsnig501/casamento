import { NextPage } from "next";
import { Container, Row, Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";

const Agenda: NextPage = () => {
  const { t, i18n } = useTranslation();

  return (
    <Container fluid>
      <Row>
        <Col>
          <a href="https://us04web.zoom.us/j/72821548402?pwd=bUZTOUc2T2l0V1VlaVp3SU8vMytOUT09">
            Link
          </a>
          <h1 />
          <p>{t("paragraphone")}</p>
          <p>{t("paragraphtwo")}</p>
          <p>{t("paragraphthree")}</p>
          <p>{t("paragraphfour")}</p>
        </Col>
      </Row>
    </Container>
  );
};

Agenda.getInitialProps = async () => ({
  namespacesRequired: ["common"],
});

export default Agenda;
