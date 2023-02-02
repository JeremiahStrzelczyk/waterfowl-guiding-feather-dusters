import React from "react";
import CallToAction from "../components/CallToAction";
import Collage from "../components/Collage";

const Home = () => {
  return (
    <main>
      <header className="main__header">
        <h1>Home</h1>
      </header>
      {/***********************************
       * INTRODUCTION
       ******************************** */}
      <section>
        <p>
          Feather Dusters is a waterfowl guide with services based in Grant
          County and most hunts happening in and around Moses Lake, WA. We
          strive to give you a fun hunting experience and welcome all eligible
          hunters.
        </p>
      </section>
      {/***********************************
       * IMAGES
       ******************************** */}

      <Collage />
      {/***********************************
       * OUTRO
       ******************************** */}
      <section>
        <p>
          Thank you for taking the time to view our website and for considering
          Featherdusters for your waterfowl hunting adventure. We are grateful
          for the opportunity to provide you with an unforgettable experience
          and make memories that will last a lifetime. Our team is committed to
          making your trip a success and we can't wait to guide you on this
          exciting journey. Thank you for choosing Featherdusters.
        </p>
      </section>
      <CallToAction />
    </main>
  );
};

export default Home;
