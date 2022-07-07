import React from "react";
import SpinnerLoader from "../assets/spinner.gif";

const Spinner = () => {
  return (
    <img
      src={SpinnerLoader}
      alt="Loading..."
      style={{ width: "100px", margin: "auto", display: "block" }}
    />
  );
};

export default Spinner;
