import { NextPage } from "next";
import { Container, Row, Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import styles from "./agenda.module.scss";

const Agenda: NextPage = () => {
  const { t, i18n } = useTranslation();

  return (
    <Container fluid>
      <Row>
        <Col>
          <div className={styles.agendaWrapper}>
            <h1>{t("agendaheading")}</h1>
            <p>{t("paragraphone")}</p>
            <p>
              {t("paragraphtwo")} -{" "}
              <a href="https://zoom.us/download" target="_blank">
                link
              </a>
            </p>
            <p>{t("paragraphthree")}</p>
            <p>{t("paragraphfour")}</p>
            <a
              className={styles.invitationLink}
              href="https://us02web.zoom.us/j/81743955794?pwd=aFRqKzE1aUIvL0hob290SitFbk5ZQT09"
            >
              {t("invitation-link")}
            </a>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

Agenda.getInitialProps = async () => ({
  namespacesRequired: ["common"],
});

export default Agenda;
