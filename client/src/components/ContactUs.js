/* File: ContactUs.js
 *
 * UI to render various ways to contact the company.
 *
 * Displays contact information pertaining to the company in
 *  a central card.
 * Displays contact information pertaining to each co-owner in
 * two columns underneath
 */

import React from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
import { GuideContactInfo } from "./GuideContactInfo";

export const ContactUs = () => {
  return (
    <>
      <div>
        <Container className="text-center">
          <Card className="p-5" bg="dark" text="white">
            <Card text="black" className="p-3 mb-3">
              <Card.Title>
                Please contact us with any questions you may have.
              </Card.Title>
              <br />
              <Card.Title>
                Questions about pricing? Booking for hunts?
              </Card.Title>
              <br />
              <Card.Title>
                Call, text, and email us and we will happily answer your
                questions.
              </Card.Title>
              <Container>
                <Card.Text>
                  <strong>Email: </strong>{" "}
                  <a href="mailto:featherdusters01@gmail.com">
                    featherdusters01@gmail.com
                  </a>
                </Card.Text>
              </Container>
            </Card>
            <Row>
              <Col>
                <GuideContactInfo
                  guide={"Zackary Russell"}
                  phone={"509-431-8165"}
                />
              </Col>
              <Col>
                <GuideContactInfo
                  guide={"Dustin Caldwell"}
                  phone={"509-793-8914"}
                />
              </Col>
            </Row>
          </Card>
        </Container>
      </div>
    </>
  );
};
