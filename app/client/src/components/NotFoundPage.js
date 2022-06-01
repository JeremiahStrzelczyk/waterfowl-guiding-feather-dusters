/**************************************************************************
 * File: NotFoundPage.js
 *
 * Page used when user enters an abnormal state
 */

import React from "react";
import { Card, Container } from "react-bootstrap";
import { CompanyJumbotron } from "./CompanyJumbotron/JumboIndex";

export const NotFound = () => {
  return (
    <div>
      <CompanyJumbotron header={"Page Not Found"} />
      <div className="bg-dark mb-1">
        <Container className="text-center d-flex flex-column min-vh-100">
          <Card className="border-0 p-5" bg="dark" text="white">
            <h1>404 Page Not Found</h1>
            <h3> Dagnabbit, that wasn't supposed to happen!</h3>
            <p>
              If you feel you arrived here by error, please contact support to
              report this incident
            </p>
          </Card>
        </Container>
      </div>
    </div>
  );
};
