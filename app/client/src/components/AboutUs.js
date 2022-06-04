/********************************************************************
 * File: AboutUs.js
 *
 * UI for rendering information about the owners of the website
 */

import React from "react";
import { Card, Row, Col, Container } from "react-bootstrap";
import { CompanyJumbotron } from "./CompanyJumbotron/JumboIndex";
import zack from "../images/orig-co-owner.jpg";
import dustin from "../images/co-owner-02.jpg";

export const AboutUs = () => {
  return (
    <>
      <CompanyJumbotron header={"About Us"} />
      <div className="bg-dark mb-1 ">
        <Container className="d-flex flex-column min-vh-100 mb-3">
          <Card bg="dark" text="white" className="border-0 p-5">
            {/******************************************************
             * OWNER INFORMATION
             *******************************************************/}
            {/*******************
             * Zack's section
             * ******************/}
            <Row className="mb-5 p-3 shadow-lg align-items-center">
              <Col lg={6}>
                <Card.Img src={zack} />
              </Col>
              <Col lg={6}>
                <Card.Title className="pt-3">Zackary Russell</Card.Title>
                <p>Co-Owner and Guide</p>
                <Card.Text className="mb-5 ">
                  I’ve been hunting in Grant county for 12 years. I love the
                  challenge of chasing ducks and geese. I also enjoy taking
                  others out to get them on the geese and giving them the
                  opportunity to bag a few.
                  <br />
                  <br />
                  It is very rewarding to see their reactions on a successful
                  hunt. There’s nothing like experiencing the sign of a flock of
                  geese dropping into our set of decoys. If you choose to book a
                  hunt with us, we’ll look forward to taking you out to get you
                  on the birds.
                </Card.Text>
              </Col>
            </Row>

            {/*******************
             * Dustin's section
             * ******************/}
            <Row className="mb-5 p-3 shadow-lg align-items-center">
              <Col lg={6}>
                <Card.Img src={dustin} />
              </Col>
              <Col lg={6}>
                <Card.Title className="pt-3">Dustin Caldwell</Card.Title>
                <p>Co-Owner and Guide</p>
                <Card.Text>
                  Waterfowl hunting has had my heart for as long as I can
                  remember. The excitement of seeing birds committed to the
                  spread is like no other. Whether it be the big honkers or a
                  mallard drake, we will put you on them.
                  <br />
                  <br />
                  Growing up I was brought along to hunt but that meant I had to
                  help with cleaning, packaging and labeling the animal for the
                  freezer. I’ve learned so many different things about hunting
                  over the years and I can't wait to show people the skills and
                  determination I’ve gained. As a kid my dad taught me about
                  hunting and preparing the meat, I could never thank him enough
                  for teaching me all I know.
                  <br />
                  <br />
                  I enjoy getting to know all the new people and taking them out
                  to experience our way of hunting. Getting to show people what
                  we do and how we do it will always be our passion.
                  <br /> <br />
                  We are always looking forward to teaching others not only a
                  great time but a safe time as well. Be sure to get a hold of
                  us, you will not regret it!
                </Card.Text>
              </Col>
            </Row>
          </Card>
        </Container>
      </div>
    </>
  );
};
