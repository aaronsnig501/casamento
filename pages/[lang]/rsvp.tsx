import { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import { NextPage } from "next";
import { Container, Row, Col } from "react-bootstrap";
import { Field, Formik, Form } from "formik";
import withLocale from "../../i18n/hoc/withLocale";
import useTranslation from "../../i18n/hooks/useTranslation";
import styles from "./rsvp.module.scss";

const Rsvp: NextPage = () => {
  return (
    <Container className={styles.wrapper}>
      <Row>
        <Col>
          <h1>RSVP</h1>
          <Formik
            initialValues={{
              name: "",
              contactMethod: "",
              contactInfo: "",
            }}
            onSubmit={async (values) => {
              let response = await fetch("http://127.0.0.1:3000/api/rsvp", {
                method: "POST",
                body: JSON.stringify({
                  ...values,
                }),
              });
            }}
          >
            <Form className={styles.form}>
              <label>
                Your name
                <Field name="name" type="text" />
              </label>
              <label>
                How would you like us to send the link?
                <Field name="contactMethod" type="text" />
              </label>
              <label>
                Provide your contact information for the method above so we can
                send you the link
                <Field name="contactInfo" type="text" />
              </label>
              <button type="submit">Submit</button>
            </Form>
          </Formik>
        </Col>
      </Row>
    </Container>
  );
};

export default withLocale(Rsvp);
