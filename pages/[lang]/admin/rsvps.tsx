import { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import { NextPage } from "next";
import { Container, Row, Col } from "react-bootstrap";
import { PrismaClient } from "@prisma/client";
import withLocale from "../../../i18n/hoc/withLocale";
import useTranslation from "../../../i18n/hooks/useTranslation";
import styles from "./index.module.scss";

interface Rsvp {
  id: number;
  name: string;
  contactMethod: string;
  contactInfo: string;
}

interface Props {
  rsvps: Array<Rsvp>;
}

const RsvpAdmin: NextPage = (props: Props) => {
  return (
    <Container>
      <Row>
        <Col>
          <h1>RSVPs</h1>
          {props.rsvps.map((item, i) => {
            return (
              <div key={i}>
                <h2>{item.name}</h2>
              </div>
            );
          })}
          <div />
        </Col>
      </Row>
    </Container>
  );
};

export const getServerSideProps = async () => {
  const prisma = new PrismaClient();
  const rsvps = await prisma.rsvp.findMany();
  return { props: { rsvps } };
};

// export default withLocale(RsvpAdmin);
export default RsvpAdmin;
