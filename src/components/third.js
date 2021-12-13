import React from "react";

const Third = (props) => {
  return (
    <div>
      <h1
        role="tabpanel"
        hidden={props.value !== props.index}
        id={`simple-tabpanel-${props.index}`}
        aria-labelledby={`simple-tab-${props.index}`}
      >
        Order Placed Successfully
      </h1>
    </div>
  );
};

export default Third;
