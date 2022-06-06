/********************************************************************************
 * File: Home.js
 *
 * Renders UI elements pertaining to the home page
 *
 * Imports images to be used on home page
 */

import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
// import img_01 from "../images/co-owner-02.jpg";
import img_02 from "../images/hunters.jpg";
import img_03 from "../images/hunters-02.jpg";
import img_04 from "../images/hunters-03.jpg";
import img_05 from "../images/two-guides.jpg";
import img_06 from "../images/hunters-05.jpg";
import img_07 from "../images/ducks-caught.jpg";
// import img_08 from "../images/co-owner.jpg";
// import img_09 from "../images/hunters-04.jpg";
import { CompanyJumbotron } from "./CompanyJumbotron/JumboIndex";

export const Home = () => {
  return (
    /* Renders a banner with the title of the current page */
    <div>
      <CompanyJumbotron header={"Home"} />
      <div className="bg-dark mb-1">
        <Container className=" text-center d-flex flex-column min-vh-100 ">
          <Card className="border-0  py-5 " bg="dark" text="white">
            <Card.Title className="mb-3">
              Feather Dusters is a waterfowl guide with services based in Grant
              County and most hunts happening in and around Moses Lake, WA.
              <br />
              <br />
              We strive to give you a fun hunting experience and welcome all
              eligible hunters.
            </Card.Title>
            <Row className="mb-5">
              <Col>
                <Card.Img alt="Pile of ducks" src={img_07} />
              </Col>
              <Col>
                <Card.Img alt="Hunters and their catch" src={img_02} />
              </Col>
              <Col>
                <Card.Img alt="Hunters and their catch" src={img_03} />
              </Col>
            </Row>

            <Row className="mb-5">
              <Col>
                <Card.Img
                  alt="Hunters posing behind a pickup with their catch"
                  src={img_04}
                />
              </Col>
              <Col>
                <Card.Img alt="Co-Owners showcasing their ducks" src={img_05} />
              </Col>
              <Col>
                <Card.Img
                  alt="Group of hunters showing off their ducks"
                  src={img_06}
                />
              </Col>
            </Row>

            <Card.Title>
              Thank you for taking the time to view our website. We hope you
              will all decide to join us out in the field this year.
            </Card.Title>
          </Card>
        </Container>
      </div>
    </div>
  );
};
