/****************************************************************
 * File: App.js
 *
 * Uses React BrowserRouter to route UI to their respective pages
 *
 */

import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

// import Button from "react-bootstrap/Button";
import { Container } from "react-bootstrap";

import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import { AboutUs } from "./components/AboutUs";
import { Home } from "./components/Home";
import { ContactUs } from "./components/ContactUs";
import { NotFound } from "./components/NotFoundPage";
import { CompanyJumbotron } from "./components/CompanyJumbotron/JumboIndex";
import { useState } from "react";
import { Footer } from "./components/Footer";
import { UnderConstruction } from "./components/UnderConstruction";

function App() {
  // const [mode, setNewMode] = useState("Home");
  // const [data, setData] = React.useState(null);

  // React.useEffect(() => {
  //   fetch("/api")
  //     .then((res) => res.json())
  //     .then((data) => setData(data.message));
  // }, []);

  /* .prettierignore */

  // const setMode = (newMode) => {
  //   setNewMode(newMode);
  // };

  return (
    <>
      {/* <p>{!data ? "Loading..." : data}</p> */}
      <Router>
        <NavigationBar />
        {/* <NavigationBar setMode={setMode} /> */}
        {/* <CompanyJumbotron header={mode} /> */}
        {/* <Container className="d-flex flex-column min-vh-100 mb-3"> */}
        <Switch>
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="/underConstruction" element={<UnderConstruction />} />
          <Route path="/" element={<Home />} />
          <Route element={<NotFound />} />
        </Switch>
        {/* </Container> */}
        <Footer />
      </Router>
    </>
  );
}

export default App;
