/*********************************************************************
 * File UnderConstruction.js
 *
 * UI to be used as a placeholder for sections that are either
 * - Broken and being fixed
 * - Future implementation
 */

import React from "react";
import { Card, Container } from "react-bootstrap";
import { CompanyJumbotron } from "./CompanyJumbotron/JumboIndex";

export const UnderConstruction = () => {
  return (
    <div>
      <CompanyJumbotron header={"Under Construction"} />
      <div className="bg-dark mb-1">
        <Container className=" text-center d-flex flex-column min-vh-100">
          <Card className="border-0 p-5" bg="dark" text="white">
            <Card.Title>This page is under construction</Card.Title>
            <Card.Text>Check back soon for more updates!</Card.Text>
          </Card>
        </Container>
      </div>
    </div>
  );
};
