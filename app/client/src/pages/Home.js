import React from "react";
import CallToAction from "../components/CallToAction";
import Collage from "../components/Collage";

const Home = () => {
  return (
    <main>
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
          Thank you for taking the time to view our website. We hope you will
          all decide to join us out in the field this year.
        </p>
      </section>
      <CallToAction />
    </main>
  );
};

export default Home;
