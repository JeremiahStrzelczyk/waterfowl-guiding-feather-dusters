/* File: JumboIndex.js
 *
 * Renders the header bar.
 * Displays the background image {JumboStyled.js} with a
 * darkened overlay to place the header title on.
 *
 * Depends on:
 * JumboStyled.js
 */

import React from "react";
import { Container } from "react-bootstrap";
import { Jumbo, Overlay } from "./JumboStyled";

export const CompanyJumbotron = (props) => {
  return (
    <Jumbo>
      <Overlay />
      <Container>
        <div className="text-white">
          <h1 className="pt-5 ">{props.header}</h1>
          <p>Waterfowl Guiding</p>
        </div>
      </Container>
    </Jumbo>
  );
};
