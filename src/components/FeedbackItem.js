import Card from "../shared/Card";
import PropTypes from "prop-types";
import { FaTimes } from "react-icons/fa";
import FeedbackContext from "../context/FeedbackContext";
import { useContext } from "react";

const FeedbackItem = ({ item: { rating, text, id } }) => {
  const { feedbackDelete } = useContext(FeedbackContext);

  return (
    <Card>
      <div className="num-display">{rating}</div>
      <button className="close" onClick={() => feedbackDelete(id)}>
        <FaTimes />
      </button>
      <div className="text-display">{text}</div>
    </Card>
  );
};
FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default FeedbackItem;
