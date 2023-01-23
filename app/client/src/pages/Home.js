import React from "react";
import CallToAction from "../components/CallToAction";
import Collage from "../components/Collage";

const Home = () => {
  return (
    <main className="main">
      {/***********************************
       * INTRODUCTION
       ******************************** */}
      <article className="main__article">
        <p>
          Feather Dusters is a waterfowl guide with services based in Grant
          County and most hunts happening in and around Moses Lake, WA. We
          strive to give you a fun hunting experience and welcome all eligible
          hunters.
        </p>
      </article>
      {/***********************************
       * IMAGES
       ******************************** */}
      <article className="main__article">
        <Collage />
      </article>
      {/***********************************
       * OUTRO
       ******************************** */}
      <article className="main__article">
        <p>
          Thank you for taking the time to view our website. We hope you will
          all decide to join us out in the field this year.
        </p>
      </article>
      <CallToAction />
    </main>
  );
};

export default Home;
