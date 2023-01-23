import ducks_caught from "../images/ducks-caught.jpg";
import hunters from "../images/hunters.jpg";
import hunters2 from "../images/hunters-02.jpg";
import hunters3 from "../images/hunters-03.jpg";
import hunters4 from "../images/two-guides.jpg";
import hunters5 from "../images/hunters-05.jpg";

const Collage = () => {
  return (
    <section className="black-section">
      <div className="collage__container">
        <figure>
          <a href={hunters} download="featherdusters01">
            <img
              src={hunters}
              alt="Hunters and Waterfowl"
              title="Hunters showcasing their catch"
              width="1000"
              height="1000"
            />
          </a>
          <figcaption className="offscreen">
            Hunters showcasing their catch
          </figcaption>
        </figure>

        <figure>
          <a href={hunters} download="featherdusters02">
            <img
              src={hunters2}
              alt="Hunters and Waterfowl"
              title="Hunters showcasing their catch"
              width="1000"
              height="1000"
            />
          </a>
          <figcaption className="offscreen">
            Hunters showcasing their catch
          </figcaption>
        </figure>

        <figure>
          <a href={hunters3} download="featherdusters03">
            <img
              src={hunters3}
              alt="Hunters and Waterfowl"
              title="Hunters showcasing their catch"
              width="1000"
              height="1000"
            />
          </a>
          <figcaption className="offscreen">
            Hunters showcasing their catch
          </figcaption>
        </figure>

        <figure>
          <a href={hunters4} download="featherdusters04">
            <img
              src={hunters4}
              alt="Hunters and Waterfowl"
              title="Hunters showcasing their catch"
              width="1000"
              height="1000"
            />
          </a>
          <figcaption className="offscreen">
            Hunters showcasing their catch
          </figcaption>
        </figure>

        <figure>
          <a href={hunters} download="featherdusters05">
            <img
              src={hunters5}
              alt="Hunters and Waterfowl"
              title="Hunters showcasing their catch"
              width="1000"
              height="1000"
            />
          </a>
          <figcaption className="offscreen">
            Hunters showcasing their catch
          </figcaption>
        </figure>

        <figure>
          <a href={ducks_caught} download="featherdusters06">
            <img
              src={ducks_caught}
              alt="Ducks in the grass"
              title="Ducks in the grass"
              width="1000"
              height="1000"
            />
          </a>
          <figcaption className="offscreen">Ducks in the grass</figcaption>
        </figure>
      </div>
    </section>
  );
};

export default Collage;
