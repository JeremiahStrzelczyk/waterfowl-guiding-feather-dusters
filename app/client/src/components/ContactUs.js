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
import { CompanyJumbotron } from "./CompanyJumbotron/JumboIndex";

export const ContactUs = () => {
  return (
    /* Renders a banner with the title of the current page */
    <>
      <CompanyJumbotron header={"Contact Us"} />
      <div className="bg-dark mb-1 pt-5">
        <Container className="text-center d-flex flex-column min-vh-100 mb-3">
          {/*********************************************
           * Information regarding the business
           ****************************************** */}
          <Card className="shadow-lg border-0 p-5" bg="dark" text="white">
            <Card.Title>
              Please contact us with any questions you may have.
            </Card.Title>
            <br />
            <Card.Title>Questions about pricing? Booking for hunts?</Card.Title>
            <br />
            <Card.Title>
              Call, text, and email us and we will happily answer your
              questions.
            </Card.Title>
            <Container className="mb-5">
              <Card.Text>
                <strong>Email: </strong>{" "}
                <a href="mailto:featherdusters01@gmail.com">
                  featherdusters01@gmail.com
                </a>
              </Card.Text>
            </Container>
            <Row>
              {/********************************************
               * Zackary's information
               ***************************************** */}
              <Col>
                <Card bg="dark" className="shadow-lg border-0  text-left">
                  <Card.Title>
                    <strong>Guide: </strong> Zackary Russell
                  </Card.Title>
                  <Card.Title>
                    <strong>Phone: </strong>
                    <a href="tel:5094318165">509-770-5571</a>
                  </Card.Title>
                </Card>
              </Col>

              <Col>
                {/********************************************
                 * Dustin's information
                 ***************************************** */}
                <Card bg="dark" className="shadow-lg border-0 text-left">
                  <Card.Title>
                    <strong>Guide: </strong> Dustin Caldwell
                  </Card.Title>
                  <Card.Title>
                    <strong>Phone: </strong>
                    <a href="tel:5097938914">509-793-8914</a>
                  </Card.Title>
                </Card>
              </Col>
            </Row>
          </Card>
        </Container>
      </div>
    </>
  );
};
