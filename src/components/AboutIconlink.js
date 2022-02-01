import { FaQuestion } from "react-icons/fa";
import { Link } from "react-router-dom";

const AboutIconlink = () => {
  return (
    <div className="about-link">
      <Link to="/aboutus">
        <FaQuestion size={30} />
      </Link>
    </div>
  );
};

export default AboutIconlink;
