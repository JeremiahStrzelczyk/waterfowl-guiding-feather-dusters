import co_owner_01 from "../images/co-owner.jpg";
import co_owner_02 from "../images/co-owner-02.jpg";
import CallToAction from "../components/CallToAction";

const AboutUs = () => {
  return (
    <main className="main">
      {/*********************************
       * Zach's About Section
       *********************************/}
      <article className="main__article even-columns">
        <section className="main__section--about">
          <img
            src={co_owner_01}
            alt="Co-Owner"
            title="Co-Owner calling for Ducks"
            width="1000"
            height="1000"
          />
        </section>
        <section className="main__section--about">
          <h2>Zackary Russell</h2>
          <h3>Co-Owner and Guide</h3>
          <p>
            I've been hunting in Grant county for 12 years. I love the challenge
            of chasing ducks and geese. I also enjoy taking others out to get
            you on the geese and giving you the opportunity to bag a few. It is
            very rewarding to see your reactions on a successful hunt. There's
            nothing like experiencing the sight of a flock of geese dropping
            into our set of decoys. If you choose to book a hunt with us, we'll
            look forward to taking you out to get you on the birds.
          </p>
        </section>
      </article>

      {/*********************************
       * Dustin's About Section
       *********************************/}

      <article className="main__article even-columns">
        <section className="main__section--about">
          <h2>Dustin Caldwell</h2>
          <h3>Co-Owner and Guide</h3>
          <p>
            Waterfowl hunting has had my heart for as long as I can remember.
            The excitement of seeing birds committed to the spread is like no
            other. Whether it be the big honkers or a mallard drake, we will put
            you on them. Growing up I was brought along to hunt but that meant I
            had to help with cleaning, packaging and labeling the animal for the
            freezer. I've learned so many different things about hunting over
            the years and I can't wait to show people the skills and
            determination I've gained. As a kid my dad taught me about hunting
            and preparing the meat, I could never thank him enough for teaching
            me all I know. I enjoy getting to know all the new people and taking
            them out to experience our way of hunting. Getting to show people
            what we do and how we do it will always be our passion. We are
            always looking forward to teaching others not only a great time but
            a safe time as well. Be sure to get a hold of us, you will not
            regret it!
          </p>
        </section>
        <section className="main__section--about">
          <img
            src={co_owner_02}
            alt="Co-Owner"
            title="Co-Owner calling for Ducks"
            width="1000"
            height="1000"
          />
        </section>
      </article>

      <CallToAction />
    </main>
  );
};

export default AboutUs;
