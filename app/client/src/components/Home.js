import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import img_01 from "../images/img_01.JPG";
import img_02 from "../images/img_02-new.JPG";
import img_03 from "../images/img_03-new.JPG";
import img_04 from "../images/img_04.JPG";
import img_05 from "../images/img_05.JPG";
import img_06 from "../images/img_06-new.JPG";
import img_07 from "../images/img_07-new.jpeg";
import img_08 from "../images/img_08-new.jpg";
import img_09 from "../images/img_09-new.jpg";
import { CompanyJumbotron } from "./CompanyJumbotron/JumboIndex";

export const Home = () => {
  return (
    <div>
      <CompanyJumbotron header={"Home"} />
      <Container
        fluid
        className="w-90 text-center d-flex flex-column min-vh-100 mb-3"
        bg="dark"
        text="white"
      >
        <Card className="p-5" bg="dark" text="white">
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
              <Card.Img className="m-3" src={img_01} />
            </Col>
            <Col>
              <Card.Img className="m-3" src={img_04} />
            </Col>
            <Col>
              <Card.Img className="m-3" src={img_05} />
            </Col>
          </Row>

          <Row className="mb-5">
            <Col>
              <Card.Img className="m-3" src={img_02} />
            </Col>
            <Col>
              <Card.Img className="m-3" src={img_08} />
            </Col>
            <Col>
              <Card.Img className="m-3" src={img_06} />
            </Col>
          </Row>

          <Row className="mb-5">
            <Col>
              <Card.Img className="m-3" src={img_07} />
            </Col>
            <Col>
              <Card.Img className="m-3" src={img_03} />
            </Col>
            <Col>
              <Card.Img className="m-3" src={img_09} />
            </Col>
          </Row>
          <Card.Title>
            Thank you for taking the time to view our website. We hope you will
            all decide to join us out in the field this year.
          </Card.Title>
        </Card>
      </Container>
    </div>
  );
};
