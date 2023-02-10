import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <main>
      <header>
        <h1 className="main__header">Page Not Found.</h1>
      </header>
      <section className="section--inverse">
        <p>
          Uh-oh! It looks like you've stumbled upon a page that's as elusive as
          a rare species of waterfowl. Don't worry, we won't tell your hunting
          buddies about this misstep. Instead, why don't you head back to our
          <Link to="/" className="link contact__link">
            {" "}
            main page{" "}
          </Link>
          and see if you can find what you're looking for? If not, our team of
          expert guides are always ready to help you track down the information
          you seek, or even a real life trophy, on your
          <Link to="/contact" className="link contact__link">
            {" "}
            next hunting trip{" "}
          </Link>
          with Featherdusters.
        </p>
      </section>
    </main>
  );
};

export default NotFoundPage;
