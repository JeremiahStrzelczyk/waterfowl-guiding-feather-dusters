import styled from "styled-components";
import img from "../../images/nature-02-cropped.jpg";

export const Overlay = styled.div`
  background-color: #000;
  opacity: 0.6;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -1;
`;

export const Jumbo = styled.div`
  background: url(${img}) no-repeat fixed bottom;
  background-size: cover;
  color: #efefef;
  height: 200px;
  position: relative;
  z-index: -2;
`;
