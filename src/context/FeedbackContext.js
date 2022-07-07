import { createContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [feedback, setFeedback] = useState([]);
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  useEffect( ()=>{
   fetchFeedback()
 
  },[])

  const fetchFeedback = async ()=>{
    const response = await fetch(`http://localhost:5000/feedback?_sort=id&_order=desc`);
    const data = await response.json();
    setFeedback(data)
    setIsLoading(false);
  }
  
  

  //Add feedback
  const addFeedback = (newFeedback) => {
    newFeedback.id = parseFloat(uuidv4(), 10);
    setFeedback([newFeedback, ...feedback]);
    console.log(newFeedback);
  };

  //Delete feedback
  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure, you want to delete?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  //Set item to be updated
  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    });
  };

  //update feedback item
  const updateFeedback = (id, updItem) => {
    setFeedback(
      feedback.map((item) =>
        item.id === id
          ? {
              item,
              ...updItem,
            }
          : item
      )
    );
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        addFeedback,
        deleteFeedback,
        isLoading,
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
