import React from "react";

const ContactUs = () => {
  return (
    <main>
      <header className="main__header">
        <h1>Contact Us</h1>
      </header>
      <section>
        <p>
          Don't miss out on the adventure of a lifetime! Book your waterfowl
          hunting trip with Featherdusters today and immerse yourself in the
          thrill of the hunt. Our experienced guides and diverse hunting grounds
          guarantee a trip filled with unforgettable memories and the chance to
          bag the trophy of your dreams. What are you waiting for? Let's make it
          happen!
        </p>
        <p>Questions about pricing? Booking for hunts?</p>
        <p>
          Call, text, and email us and we will happily answer your questions.
        </p>
      </section>
      <section className="section--inverse">
        <p>
          Email:{" "}
          <span>
            <a
              className="link contact__link"
              href="mailto:featherdusters01@gmail.com"
            >
              featherdusters01@gmail.com
            </a>
          </span>
        </p>

        <div>
          <p>Guide: Zackary Russell</p>
          <p>
            <a className="link contact__link" href="tel:5094318165">
              509-770-5571
            </a>
          </p>
        </div>
        <div>
          <p>Guide: Dustin Caldwell</p>
          <p>
            <a className="link contact__link" href="tel:5097938914">
              509-793-8914
            </a>
          </p>
        </div>
      </section>
    </main>
  );
};

export default ContactUs;
