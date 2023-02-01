import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <div className="cta-wrapper">
      <div className="cta">
        <p className="center">We're bringing in the geese this year.</p>
        <p className="center">You can to.</p>
        <button className="button">
          <Link to="/contact" className="cta__link">
            Book Today!
          </Link>
        </button>
      </div>
    </div>
  );
};

export default CallToAction;
