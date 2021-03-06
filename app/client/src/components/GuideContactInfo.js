/* File: GuideContactInfo.js
 *
 * Component used in {ContactUs.js} to render
 * contact information for the various guides.
 */

import React from "react";
import { Card } from "react-bootstrap";

export const GuideContactInfo = ({ guide, phone }) => {
  const href = "tel:" + { phone };
  return (
    <Card bg="dark" className="text-left">
      <Card.Title>
        <strong>Guide: </strong> {guide}
      </Card.Title>
      <Card.Title>
        <strong>Phone: </strong>
        <a href="tel:5094318165">{phone}</a>
        {/* <a href={href}>{phone}</a> */}
      </Card.Title>
    </Card>
  );
};
