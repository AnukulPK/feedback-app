import React, { useState } from 'react';
import FeedbackList from './components/FeedbackList';
import Header from './components/Header';
import FeedbackData from './data/feedbackData';

const App = () => {
  const [feedback, setFeedback] = useState(FeedbackData);

  const deleteFeedback = (id) => {
    console.log('App', id);
  };

  return (
    <>
      <Header />
      <div className="container">
        <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
      </div>
    </>
  );
};

export default App;
