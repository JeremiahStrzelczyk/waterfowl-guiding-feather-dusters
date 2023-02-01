import React from "react";

const ContactUs = () => {
  return (
    <main>
      <article className="main__article">
        <section aria-label="Email Us" className="main__section">
          <p>Please contact us with any questions you may have.</p>
          <p>Questions about pricing? Booking for hunts?</p>
          <p>
            Call, text, and email us and we will happily answer your questions.
          </p>
          <p>
            Email:
            <a href="mailto:featherdusters01@gmail.com">
              featherdusters01@gmail.com
            </a>
          </p>
        </section>
        <section
          className="even-columns"
          aria-label="Phone numbers for Co-Owners"
        >
          <div>
            <p>Guide: Zackary Russell</p>
            <p>
              <a area-label="Zackary phone number" href="tel:5094318165">
                509-770-5571
              </a>
            </p>
          </div>
          <div>
            <p>Guide: Dustin Caldwell</p>
            <p>
              <a aria-label="Dustin phone number" href="tel:5097938914">
                509-793-8914
              </a>
            </p>
          </div>
        </section>
      </article>
    </main>
  );
};

export default ContactUs;
