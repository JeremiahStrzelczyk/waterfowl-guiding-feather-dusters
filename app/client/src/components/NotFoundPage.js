import React from "react";
import { Container } from "react-bootstrap";

export const NotFound = () => {
  return (
    <Container fluid className="d-flex flex-column min-vh-100">
      <h1>404 Page Not Found</h1>
      <h3> Dagnabbit, that wasn't supposed to happen!</h3>
      <p>
        If you feel you arrived here by error, please contact support to report
        this incident
      </p>
    </Container>
  );
};
