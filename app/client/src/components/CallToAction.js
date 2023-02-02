import { useNavigate } from "react-router-dom";

const CallToAction = () => {
  const navigate = useNavigate();
  return (
    <div className="cta-wrapper">
      <div className="cta">
        <p className="center">We're bringing in the geese this year.</p>
        <p className="center">You can to.</p>
        <button
          className="button cta__link"
          onClick={() => navigate("/contact")}
        >
          Book Today!
        </button>
      </div>
    </div>
  );
};

export default CallToAction;
