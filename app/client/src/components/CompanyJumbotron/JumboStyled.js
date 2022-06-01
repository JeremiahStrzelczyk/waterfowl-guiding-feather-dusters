import styled from "styled-components";
// import img from "../../images/nature-02-cropped.jpg";
// import img from "../../images/charles-jackson-unsplash-geese-over-water-600x100.jpg";
// import img from "../../images/charles-jackson-unsplash-geese-over-water-1100x200.jpg";
// import img from "../../images/charles-jackson-unsplash-geese-over-water-2500x500.jpg";
import img from "../../images/charles-jackson-unsplash-geese-over-water.jpg";
// import img from "../../images/charles-jackson-unsplash-geese-over-water-01.png";
// import img from "../../images/charles-jackson-unsplash-geese-over-water-02.jpg";
// import img from "../../images/test-00.jpg";

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
