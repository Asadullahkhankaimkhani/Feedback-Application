import React, { useState } from "react";
import Header from "./components/Header";
import { FeedbackData } from "./Data/FeedbackData";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";

const App = () => {
  const [feedback, setFeedback] = useState(FeedbackData);

  const feedbackDelete = (id) => {
    if (window.confirm("Are You Sure"))
      setFeedback(feedback.filter((feed) => feed.id !== id));
  };

  return (
    <>
      <Header />
      <div className="container">
        <FeedbackStats feedback={feedback} />
        <FeedbackList feedback={feedback} handleDelete={feedbackDelete} />
      </div>
    </>
  );
};

export default App;
