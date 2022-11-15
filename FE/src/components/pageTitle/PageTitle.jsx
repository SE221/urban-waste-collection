import React from "react";
import "./pageTitle.css";

const PageTitle = (props) => {
  return (
    <div className="d-flex justify-content-between w-100 flex-wrap">
      <div className="mb-3 mb-lg-0">
        <div className="title">
          <h1 className="h4">{props.title}</h1>
          <p>{props.description}</p>
        </div>
      </div>
    </div>
  );
};

export default PageTitle;
