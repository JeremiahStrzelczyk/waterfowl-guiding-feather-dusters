import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import DRAGONPIC from "./images/logo.jpg";

// import Button from "react-bootstrap/Button";
import {
  Container,
  Row,
  Col,
  Button,
  Alert,
  Breadcrumb,
  Card,
  Form,
  Navbar,
  Nav,
} from "react-bootstrap";

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

function App() {
  // const [data, setData] = React.useState(null);

  // React.useEffect(() => {
  //   fetch("/api")
  //     .then((res) => res.json())
  //     .then((data) => setData(data.message));
  // }, []);

  /* .prettierignore */
  return (
    <>
      <Router>
        <NavigationBar />
        <Switch>
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="/" element={<Home />} />
          <Route element={<NotFound />} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
