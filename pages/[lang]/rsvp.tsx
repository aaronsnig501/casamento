import { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import { NextPage } from "next";
import { Container, Row, Col } from "react-bootstrap";
import { Field, Formik, Form } from "formik";
import withLocale from "../../i18n/hoc/withLocale";
import useTranslation from "../../i18n/hooks/useTranslation";
import styles from "./index.module.scss";

const Rsvp: NextPage = () => {
  return (
    <Container>
      <Row>
        <Col>
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
            <Form>
              <label>
                Your Name
                <Field name="name" type="text"></Field>
              </label>
              <label>
                Contact Method
                <Field name="contactMethod" type="text"></Field>
              </label>
              <label>
                Contact Info
                <Field name="contactInfo" type="text"></Field>
              </label>
              <button type="submit">Submit</button>
            </Form>
          </Formik>
          <h1>Hello</h1>
        </Col>
      </Row>
    </Container>
  );
};

export default withLocale(Rsvp);
