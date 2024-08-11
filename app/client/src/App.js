import { Routes as Switch, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/AboutUs";
import Contact from "./pages/ContactUs";
import NotFoundPage from "./pages/NotFoundPage";
import UnderConstruction from "./components/UnderConstruction";

const App = () => {
  return (
    <div> Hello, World! </div>
    // <Switch>
    //   <Route path="/" element={<Layout />}>
    //     <Route index element={<Home />} />

    //     <Route path="about" element={<About />} />
    //     <Route path="contact" element={<Contact />} />
    //     <Route path="*" element={<NotFoundPage />} />
    //   </Route>
    // </Switch>
  );
};

export default App;
