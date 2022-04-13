import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: "This item from context is from FeedbackProvider",
      rating: 5,
    },
    {
      id: 2,
      text: "This item from context is from FeedbackProvider",
      rating: 10,
    },
    {
      id: 3,
      text: "This item from context is from FeedbackProvider",
      rating: 7,
    },
  ]);

  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  const feedbackDelete = (id) => {
    if (window.confirm("Are You Sure?"))
      setFeedback(feedback.filter((feed) => feed.id !== id));
  };

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };

  const updateFeedback = (id, updatedFeedback) => {
    setFeedback(
      feedback.map((feed) => (feed.id === id ? updatedFeedback : feed))
    );
  };

  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    });
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        feedbackDelete,
        addFeedback,
        editFeedback,
        feedbackEdit,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
