import { v4 as uuidv4 } from "uuid";
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import { FeedbackData } from "./Data/FeedbackData";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import About from "./pages/About";

const App = () => {
  const [feedback, setFeedback] = useState(FeedbackData);

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };

  const feedbackDelete = (id) => {
    if (window.confirm("Are You Sure?"))
      setFeedback(feedback.filter((feed) => feed.id !== id));
  };

  return (
    <>
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route
              path="/"
              exact
              element={
                <>
                  <FeedbackForm handleAdd={addFeedback} />
                  <FeedbackStats feedback={feedback} />
                  <FeedbackList
                    feedback={feedback}
                    handleDelete={feedbackDelete}
                  />
                </>
              }
            />

            <Route exact path="/aboutus" element={<About />} />
          </Routes>
        </div>
      </Router>
    </>
  );
};

export default App;
