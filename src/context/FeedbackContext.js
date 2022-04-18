import { createContext, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [feedback, setFeedback] = useState([]);
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  useEffect(() => {
    fetchFeedback();
  }, []);

  const fetchFeedback = async () => {
    const response = await fetch("/feedback?_sort=id&_order=desc");
    const feedback = await response.json();
    setFeedback(feedback);
    setIsLoading(false);
  };

  const feedbackDelete = async (id) => {
    if (window.confirm("Are You Sure?"))
      await fetch(`/feedback/${id}`, {
        method: "DELETE",
      });
    fetchFeedback();

    // setFeedback(feedback.filter((feed) => feed.id !== id));
  };

  const addFeedback = async (newFeedback) => {
    const response = await fetch("/feedback", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newFeedback),
    });

    const data = await response.json();

    setFeedback([data, ...feedback]);
  };

  const updateFeedback = async (id, updatedFeedback) => {
    const response = await fetch(`/feedback/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedFeedback),
    });
    const data = await response.json();
    fetchFeedback();

    // setFeedback(
    //   feedback.map((feed) => (feed.id === id ? updatedFeedback : data))
    // );
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
        isLoading,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
