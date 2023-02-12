import co_owner_01 from "../images/co-owner.jpg";
import co_owner_02 from "../images/co-owner-02.jpg";
import raw_co_owner_01_1169x907 from "../images/raw_co_owner_01_1169x907.JPG";
import raw_co_owner_02_1206x2208 from "../images/raw_co_owner_02_1206x2208.JPG";
import CallToAction from "../components/CallToAction";

const AboutUs = () => {
  return (
    <main>
      <header className="main__header">
        <h1>About Featherdusters</h1>
      </header>

      <section>
        <p>
          We offer an unforgettable waterfowl hunting experience for clients.
          Our team of experienced guides takes you on a journey to hunt the most
          sought-after species including Canadian geese, ducks, and snow geese
          in their natural habitats, with plans to add more in the future. We
          hunt in a variety of environments, including fields, rivers, and
          creeks, to ensure a diverse and exciting trip. Join us on a thrilling
          adventure and make memories that will last a lifetime.
        </p>
      </section>
      {/*********************************
       * Zach's About Section
       *********************************/}
      <section className="section--inverse">
        <h2 className="center">Zackary Russell</h2>
        <h3 className="center">Co-Owner and Guide</h3>
        <div className="even-columns about__not-even-columns">
          <figure>
            <a href={raw_co_owner_01_1169x907}>
              <img
                className="about__img"
                src={co_owner_01}
                alt="Co-Owner"
                title="Co-Owner calling for Ducks"
                width="1000"
                height="1000"
              />
            </a>
            <figcaption className="offscreen">
              Co-owner Zack calling for ducks.
            </figcaption>
          </figure>
          <p className="left-align about__body">
            I've been hunting in Grant county for 12 years. I love the challenge
            of chasing ducks and geese. I also enjoy taking others out to get
            you on the geese and giving you the opportunity to bag a few. It is
            very rewarding to see your reactions on a successful hunt. There's
            nothing like experiencing the sight of a flock of geese dropping
            into our set of decoys. If you choose to book a hunt with us, we'll
            look forward to taking you out to get you on the birds.
          </p>
        </div>
      </section>
      {/*********************************
       * Dustin's About Section
       *********************************/}
      <section className="section--inverse">
        <h2 className="center">Dustin Caldwell</h2>
        <h3 className="center">Co-Owner and Guide</h3>
        <div className="even-columns about__not-even-columns">
          <figure>
            <a href={raw_co_owner_02_1206x2208}>
              <img
                className="about__img"
                src={co_owner_02}
                alt="Co-Owner"
                title="Co-Owner calling for Ducks"
                width="1000"
                height="1000"
              />
            </a>
            <figcaption className="offscreen">
              Co-owner Dustin showing off a duck.
            </figcaption>
          </figure>
          <p className="left-align about__body">
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
        </div>
      </section>
      <CallToAction />
    </main>
  );
};

export default AboutUs;
