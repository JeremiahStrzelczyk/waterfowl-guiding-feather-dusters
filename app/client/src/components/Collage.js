import ducks_caught from "../images/ducks-caught.jpg";
import hunters from "../images/hunters.jpg";
import hunters2 from "../images/hunters-02.jpg";
import hunters3 from "../images/hunters-03.jpg";
import hunters4 from "../images/two-guides.jpg";
import hunters5 from "../images/hunters-05.jpg";

const Collage = () => {
  return (
    <section className="black-section">
      <div
        aria-label="A collage of images taken with our clients while out on guides"
        className="collage__container"
      >
        <figure>
          <a href={hunters} download="featherdusters01">
            <img
              src={hunters}
              alt="Five feather dusters standing behind their geese. A link to download featherdusters01.jpg"
              title="Hunters showcasing their geese in front of a trailer"
              width="1000"
              height="1000"
            />
          </a>
          <figcaption className="offscreen">
            Zack and Dustin, along with their clients, pose in front of their
            featherdusters trailer to showcase their catch for the day.
          </figcaption>
        </figure>

        <figure>
          <a href={hunters} download="featherdusters02">
            <img
              src={hunters2}
              alt="Two hunters showcasing their catch for the day. A link to download featherdusters02.jpg"
              title="Two hunters withe their geese"
              width="1000"
              height="1000"
            />
          </a>
          <figcaption className="offscreen">
            Dustin and his friend stand in the snow, showcasing the geese they
            pulled in for the day.
          </figcaption>
        </figure>

        <figure>
          <a href={hunters3} download="featherdusters03">
            <img
              src={hunters3}
              alt="Three hunters posing with geese along the tailgate of a truck. A link to download featherdusters03.jpg"
              title="Three hunters with their geese in the back of a pickup"
              width="1000"
              height="1000"
            />
          </a>
          <figcaption className="offscreen">
            Our guides, Dustin and Zack, and a friend present their geese in the
            back of a pickup to showcase their haul.
          </figcaption>
        </figure>

        <figure>
          <a href={hunters4} download="featherdusters04">
            <img
              src={hunters4}
              alt="Our feather duster guides showing off their catch. A link to download featherdusters04.jpg"
              title="Our guides posing with their geese."
              width="1000"
              height="1000"
            />
          </a>
          <figcaption className="offscreen">
            Guides Zack and Dustin kneeling behind their geese for the day.
          </figcaption>
        </figure>

        <figure>
          <a href={hunters} download="featherdusters05">
            <img
              src={hunters5}
              alt="Our guides and clients showing off a successful hunt. A link to download featherdusters05.jpg"
              title="Four hunters with their catch in the snow"
              width="1000"
              height="1000"
            />
          </a>
          <figcaption className="offscreen">
            Zack and Dustin pose with two clients to show off the geese they
            caught for the day.
          </figcaption>
        </figure>

        <figure>
          <a href={ducks_caught} download="featherdusters06">
            <img
              src={ducks_caught}
              alt="A pile of geese in the grass. A link to download ducks-caught.jpg"
              title="Ducks in the grass"
              width="1000"
              height="1000"
            />
          </a>
          <figcaption className="offscreen">
            A large pile of geese displayed in the grass.
          </figcaption>
        </figure>
      </div>
    </section>
  );
};

export default Collage;
